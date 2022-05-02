import React  from "react";
import './searchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term:''
        };
        
    }
    onTermSubmit = (event) => {
    event.preventDefault();
    
    //call on form submit
    console.log(this.props.onTermSubmit(this.state.term));
    }
    getSearchKey = (event) => {
        //ev.preventDefault();
        this.setState({term:event.target.value})
    }
    
    render(){
    
        return (
            <div className="search">
                <form onSubmit={this.onTermSubmit}>
                <label>Search Video</label >
                <input 
                type="search"
                className="form-control" 
               
                onChange={this.getSearchKey}
                value={this.state.term}
                />
                
                </form>
            </div>
        )
    }
}

export default SearchBar;