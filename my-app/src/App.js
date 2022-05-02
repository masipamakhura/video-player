
import React from 'react';
import './App.css';

import SearchBar from './components/searchBar/searchBar';
import youtube from './apis/youtube';

class App extends React.Component {

  constructor(props){
  
    super(props);
    
    this.state = {}
  
  }
  onTermSubmit = term =>{
  
  
    youtube.get('/search',{
      params: {
      q: term
      }
    })
  
     
  }
  
  render(){
  
  return (
  <div className="App">
  
    <SearchBar onTermSubmit={this.onTermSubmit} />
    
  </div>
  )
  
  }
}

export default App; 
