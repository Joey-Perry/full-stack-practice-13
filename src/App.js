import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      data: [],
    }
  }

  getMovies = () => {
    axios.get('/api/movies')
      .then(({data}) => this.setState({ data }))
      .catch(err => console.log(err))
  }


  render(){
    return(
      <div className='App'>
        <h1>Hello World</h1>
        <button onClick={this.getMovies}>GET MOVIES</button>
        <ul>
          {this.state.data.map(movie => {
            return (<li key={movie.id}> 
              <h3>{movie.title}</h3>
              <h4>{movie.release_date}</h4>
              </li>)
          })}
        </ul>
      </div>
    )
  }
}

export default App;
