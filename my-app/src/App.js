
import React from 'react';
import './App.css';

import SearchBar from './components/searchBar/searchBar';
import youtube from './apis/youtube';
import ViedeoList from './components/list/list';

class App extends React.Component {

  constructor(props){
  
    super(props);
    
    this.state = {
    videos: [],
    }
  
  }
  onTermSubmit = async term =>{
  
  
   const response = await youtube.get('/search',{
      params: {
      q: term
      }
    })
    
  
  
    this.setState({videos: response.data.items})
  }
  
  render(){
  
  return (
  <div className="App">
  
    <SearchBar onTermSubmit={this.onTermSubmit} />
    
    <ViedeoList videos={this.state.videos}  />
    
  </div>
  )
  
  }
}

export default App; 
