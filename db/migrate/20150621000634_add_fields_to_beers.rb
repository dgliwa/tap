class AddFieldsToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :description, :string
    add_column :beers, :name, :string
  end
end
