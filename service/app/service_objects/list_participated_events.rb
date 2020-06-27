# frozen_string_literal: true

class ListParticipatedEvents
  attr_reader :params, :user_id

  def initialize(params:, current_user:)
    @params = params
    @user_id = params.user_id.present? ? params.user_id : current_user.id
  end

  def call
    events.map do |event|
      { id: event.id,
        title: event.name,
        event_type: event.event_type,
        status: event.status,
        address: event.address,
        meeting_link: event.meeting_link,
        start_time: event.start_datetime,
        end_time: event.end_datetime,
        category: event.category,
        tags: event.tags,
        user_name: user.name,
        mentor_id: event.mentor_id,
        mentor_name: mentor_name(event.mentor_id),
        rating: rating(event.id) }
    end
  end

  private

  def events
    @events ||= Events.where(user_events_params.merge(id: user.event_participants.map(&:event_id)))
  end

  def user
    @user ||= User.find_by(user_id: user_id)
  end

  def mentor_name(mentor_id)
    User.find_by(mentor_id: mentor_id)
  end

  def rating(event_id)
    EventRating.where(user_id: user_id, event_id: event_id)&.rating
  end
end
