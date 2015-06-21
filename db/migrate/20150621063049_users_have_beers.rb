class UsersHaveBeers < ActiveRecord::Migration
  def change
    add_reference :beers, :users, index: true
  end
end
