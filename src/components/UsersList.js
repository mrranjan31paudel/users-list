import React from 'react';
import '../styles/userslist.css';

class UsersList extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <ul className="users-list">
        {
          users.map((user) => 
            <li key={user.id} onClick={() => this.props.oneUserClicked(user.id)}>
              <img src={user.profileImage? user.profileImage:''} alt=""></img>
              <p>{user.firstName && user.lastName? user.firstName + ' ' + user.lastName:''}</p>
            </li>
          )
        }
      </ul>
    );
  }
}

export default UsersList;