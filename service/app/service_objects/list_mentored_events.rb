# frozen_string_literal: true

class ListMentoredEvents
  attr_reader :params, :mentor_id

  def initialize(params:, current_user:)
    @params = params
    @mentor_id = params.mentor_id.present? ? params.mentor_id : current_user.id
  end

  def call
    events.map do |event|
      rating = event.event_ratings.average(:rating)
      participants_number = event.event_participants.count
      { id: event.id,
        title: event.name,
        type: event.type,
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
        participants_number: participants_number }
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
