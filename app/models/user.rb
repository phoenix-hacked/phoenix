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

  INDIVIDUAL = 0
  INSTITUTE = 1

  USER_TYPES = {
    INDIVIDUAL => 'individual',
    INSTITUTE => 'institute',
  }.freeze

  ACTIVE = 0
  ARCHIVED = 1
  BLACKLISTED = 2

  STATUSES = {
    ACTIVE => 'active',
    ARCHIVED => 'archived',
    BLACKLISTED => 'blacklisted'
  }.freeze

  def admin?
    role == ADMIN
  end

  def member?
    role == MEMBER
  end
end
