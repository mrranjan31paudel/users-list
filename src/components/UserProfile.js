import React from 'react';
import '../styles/userprofile.css';
import buttonImage from '../images/close.png';

class UserProfile extends React.Component {
  render() {
    const {userInfo} = this.props;
    
    if(userInfo){
      return (
        <div className={'pop-up-info '+this.props.newClassName}>
          <div className="info-wrapper">
            <button className="close-info" onClick={this.props.onCloseButtonClick}><img src={buttonImage} alt=""></img></button>
            <div className="user-title">
              <img className="cover-image" src={userInfo.profileImage} alt=""></img>
              <img className="user-image" src={userInfo.profileImage? userInfo.profileImage : ''} alt=""></img>
              <p className="user-name">{userInfo.firstName&&userInfo.lastName?userInfo.firstName + ' ' + userInfo.lastName:''}</p>
            </div>
            <div className="user-info">
              <div>
                <p>Contact:</p>
                <p>Email : {userInfo.email}</p>
                <p>Phone : {userInfo.phone}</p>
              </div>
              <div>
                <p>Address:</p>
                <p>City : {userInfo.address.city}</p>
                <p>State : {userInfo.address.state}</p>
                <p>Country : {userInfo.address.country}</p>
                <p>Zip Code : {userInfo.address.zipCode}</p>
                <p>Counrty Code : {userInfo.address.countryCode}</p>
                <p>Street Address : {userInfo.address.streetAddress}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    else{
      return null;
    }
    
  }
}

export default UserProfile;