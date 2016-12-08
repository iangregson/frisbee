const { compose, replace } = require('ramda')
const { mconcat } = require('pointfree-fantasy')

const Url = String

const baseUrl = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=14c4ebab40155d8c54dacb0642f46d68&tags={TAGS}&extras=url_s&format=json&jsoncallback=?'

// makeUrl :: String -> Url
const makeUrl = t => replace('{TAGS}', t, baseUrl)

// flickrSearch :: String -> ?
const flickrSearch = compose(makeUrl)

module.exports = { flickrSearch }