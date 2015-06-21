class AddLocationToBeer < ActiveRecord::Migration
  def change
    add_column :beers, :latitude, :decimal, precision: 9, scale: 7
    add_column :beers, :longitude, :decimal, precision: 9, scale: 7
  end
end
