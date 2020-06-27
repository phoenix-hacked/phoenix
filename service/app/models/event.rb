class Event < ApplicationRecord
  belongs_to :user
  has_many :event_participants
  has_many :event_ratings

  STATUSES = {
    SCHEDULED => 'scheduled',
    COMPLETED => 'completed',
    CANCELLED => 'cancelled',
    ARCHIVED => 'archived'
  }

  SCHEDULED = 0
  COMPLETED = 1
  CANCELLED = 2
  ARCHIVED = 3
end
