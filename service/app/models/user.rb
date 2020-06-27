class User < ApplicationRecord
  has_many :companies
  has_many :events
  has_many :event_participants
  has_many :event_ratings

  TYPES = {
    ADMIN => 'admin',
    MEMBER => 'member'
  }

  ADMIN = 0
  MEMBER = 1

  def admin?
    type == ADMIN
  end

  def member?
    type == MEMBER
  end
end
