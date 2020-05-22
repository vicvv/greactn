import React, {Component} from 'react'

class UserList extends Component {
  render(){
  const {movieID,profiles, users} = this.props;
  const filteredProfiles = profiles.filter(
    profile => Number(profile.favoriteMovieID) === movieID
  );
    
    console.log(filteredProfiles)
	
	if (!filteredProfiles || filteredProfiles.length === 0) {
      return <p> No oone likes the movie</p>;
      
  }
	
	return (
      <div>
        <p>Liked by:</p>
        <ul>
          {filteredProfiles.map(profile => (
            <li key={profile.userID}>{users[profile.userID].name}</li>
          ))}
        </ul>
      </div>
    );
 }
}

export default UserList;