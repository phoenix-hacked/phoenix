# frozen_string_literal: true

class EventsController < ActionController::API
  def index
    render json: list_events, status: 200
  end

  def user_events
    response = list_member_events
    render json: response, status: 200
  end

  private

  def list_events
    events = Event.where(list_params.except(:user_id))
    events.map do |event|
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
        mentor_id: event.mentor_id,
        mentor_name: mentor_name(event.mentor_id),
        attendees: attendees }
    end
  end

  def list_params
    params.permit(:event_type, :status, :start_datetime, :end_datetime, :category, :mentor_id)
  end

  def mentor_name(mentor_id)
    User.find_by(mentor_id: mentor_id).name
  end

  def list_member_events
    { participated_events: ListParticipatedEvents.new(params: user_events_params,
                                                      user_id: params.user_id)
                                                 .call,
      mentored_events: ListMentoredEvents.new(params: user_events_params,
                                              mentor_id: params.mentor_id)
                                         .call }
  end

  def user_events_params
    params.require(:user_id, :mentor_id)
          .permit(:event_type, :status, :start_datetime, :end_datetime, :category, :tags)
  end
end
