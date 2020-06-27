class User < ApplicationRecord
  has_many :companies
  has_many :events
  has_many :event_participants
  has_many :event_ratings

  USER_TYPE = {
    0 => 'individual',
    1 => 'institute',
  }.freeze
end
