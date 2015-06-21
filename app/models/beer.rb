class Beer < ActiveRecord::Base
  belongs_to :user
  has_many :user_beers
  has_many :users, through: :user_beers
	has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/
end
