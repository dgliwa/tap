json.array! @beers.map do |beer|
  json.id beer.id
  json.name beer.name
  json.description beer.description
  json.url beer.image.url
end
