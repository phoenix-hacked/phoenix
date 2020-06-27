# frozen_string_literal: true

class EventsController < ActionController::API
  def index
    render json: list_events, status: 200
  end

  def user_events
    response = current_user.admin? ? list_events : list_member_events
    render json: response, status: 200
  end

  private

  def list_events
    Event.where(list_params)
  end

  def list_params
    params.permit(:user_id, :event_type, :status, :start_datetime, :end_datetime, :category, :mentor_id)
  end

  def list_member_events
    return events_template unless current_user.member?
    { participated_events: ListParticipatedEvents.new(params: user_events_params,
                                                      current_user: current_user)
                                                 .call,
      mentored_events: ListMentoredEvents.new(params: user_events_params,
                                              current_user: current_user)
                                         .call }
  end

  def events_template
    { participated_events: [], mentored_events: [] }
  end

  def user_events_params
    params.permit(:event_type, :status, :start_datetime, :end_datetime, :category, :tags)
  end
end
