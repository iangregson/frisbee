const React = require('react')
const { flickrSearch } = require('./model')

exports.Flickr = React.createClass({
  displayName: 'Flickr',

  // getInitialState :: { term :: String }
  getInitialState() { return { term: '' } },

  // termChanged :: Event -> State change Term
  termChanged({ currentTarget: t }) { this.setState({ term: t.value }) },

  // searchClicked :: Event -> ?
  searchClicked(_) { flickrSearch },

  render() {
    return (
      <div id="flickr">
        <input type="text" onChange={ this.termChanged }/>
        <button onClick={ this.searchClicked }>Search</button>
        <div id="results"></div>
      </div>
    );
  }
});

