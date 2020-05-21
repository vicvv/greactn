import React, {Component} from 'react'
import UserList from './UserList';

class PopularMovies extends Component {
  render() {
    const {profiles,users,movies} = this.props;
    const LovedMovies = Object.values(movies);
    
    return (
      
      <div className="PopularMovies-container">
        {LovedMovies.map(movie => (
          <div key={movie.id} className="PopularMovies-cell">
            <h3>{movie.name}</h3>
            <UserList movieID={movie.id} users={users} profiles={profiles} />
          </div>
        ))}
      </div>
    
    );
    }
}


export default PopularMovies;