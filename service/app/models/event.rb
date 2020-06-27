class Event < ApplicationRecord
  belongs_to :user
  has_many :event_participants
  has_many :event_ratings

  SCHEDULED = 0
  COMPLETED = 1
  CANCELLED = 2
  ARCHIVED = 3

  STATUSES = {
    SCHEDULED => 'scheduled',
    COMPLETED => 'completed',
    CANCELLED => 'cancelled',
    ARCHIVED => 'archived'
  }.freeze

  VIRTUAL = 0
  PHYSICAL = 1

  EVENT_TYPES = {
    VIRTUAL => 'virtual',
    PHYSICAL => 'physical'
  }.freeze
end
