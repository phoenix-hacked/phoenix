# frozen_string_literal: true

class EventsController < ActionController::API
  def index
    render json: list_events, status: 200
  end

  def create
    event = Event.create!(create_events_params)
  end

  def user_events
    response = list_member_events
    render json: response, status: 200
  end

  def global_stats
    data = {
      total_mentors: 15,
      total_mentees: 102,
      total_organizations: 20,
      mentorship_hours: 250
    }
    render json: data, status: 200
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
    user = User.find_by(id: mentor_id)
    "#{user.first_name} #{user.last_name}".strip
  end

  def list_member_events
    { participated_events: ListParticipatedEvents.new(params: user_events_params,
                                                      user_id: params[:user_id])
                                                 .call,
      mentored_events: ListMentoredEvents.new(params: user_events_params,
                                              mentor_id: params[:mentor_id])
                                         .call }
  end
  
  def user_events_params
    params.permit(:mentor_id, :event_type, :status, :start_datetime, :end_datetime,
                  :category, :tags)
  end

  def create_events_params
    params.permit(:event_type, :status, :start_datetime, :end_datetime, :category, :meeting_link,
                  :name, :address, :user_id, :mentor_id, :max_participants, :description, tags:[])
  end
end
