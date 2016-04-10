// import from dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar.js';

// Youtube API
const API_KEY = 'AIzaSyAkMb7LUi72EtkKxhOtkrglTCmXOh-hIQw';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
    });

  }


  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}


// RENDER COMPONENTS TO DOM
ReactDOM.render(<App />, document.querySelector('.container'));
