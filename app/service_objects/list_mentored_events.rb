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
      participants_number = event.event_participants.count
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
        participants_number: participants_number }
    end
  end

  private

  def events
    @events ||= Event.where(params)
  end

  def mentor_name
    @mentor_name ||= prepare_mentor_name
  end

  def prepare_mentor_name
    user = User.find_by(id: mentor_id)
    "#{user.first_name} #{user.last_name}".strip
  end
end
