json.array! @beers.map do |beer|
  json.name beer.name
  json.description beer.description
  json.url beer.image.url
end
