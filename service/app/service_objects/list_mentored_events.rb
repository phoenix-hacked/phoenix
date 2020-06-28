# frozen_string_literal: true

class ListMentoredEvents
  attr_reader :params, :mentor_id

  def initialize(params:, mentor_id:)
    @params = params
    @mentor_id = mentor_id
  end

  def call
    events.map do |event|
      rating = event.event_ratings.average(:rating)
      attendees = event.event_participants.count
      { id: event.id,
        title: event.name,
        description: event.description,
        event_type: event.event_type,
        status: event.status,
        address: event.address,
        meeting_link: event.meeting_link,
        start_time: event.start_datetime,
        end_time: event.end_datetime,
        category: event.category,
        tags: event.tags,
        mentor_id: mentor_id,
        mentor_name: mentor_name,
        rating: rating,
        attendees: attendees }
    end
  end

  private

  def events
    @events ||= Events.where(user_events_params.merge(mentor_id: mentor_id))
  end

  def mentor_name
    @mentor_name ||= User.find_by(mentor_id: mentor_id).name
  end
end
