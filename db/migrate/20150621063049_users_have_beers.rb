class UsersHaveBeers < ActiveRecord::Migration
  def change
    add_reference :beers, :user, index: true
  end
end
