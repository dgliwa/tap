class User < ActiveRecord::Base
  has_many :beers
  has_many :user_beers
  has_many :favorited_beers, through: :user_beers, source: :beer
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
