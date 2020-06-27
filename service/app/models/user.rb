class User < ApplicationRecord
  has_many :companies
  has_many :events
  has_many :event_participants
  has_many :event_ratings

  ADMIN = 0
  MEMBER = 1

  ROLES = {
    ADMIN => 'admin',
    MEMBER => 'member'
  }.freeze

  USER_TYPE = {
    0 => 'individual',
    1 => 'institute',
  }.freeze

  def admin?
    role == ADMIN
  end

  def member?
    role == MEMBER
  end
end
