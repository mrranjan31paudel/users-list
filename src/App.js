import React from 'react';
import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import './App.css';

function withHeader(ComponentList) {
  return function(props){
    return (
      <div>
        <Header {...props}/>
        <ComponentList {...props}/>
      </div>
    );
  }
}
const EnhancedUsersList = withHeader(UsersList);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedUserId : null,
      searchString : '',
      users : [],
    };
  }

  componentDidMount() {
    fetch('https://mock-io.herokuapp.com/users')
      .then((response) => {return response.json()})
      .then((jsonFile) => {
        this.setState({
          users : jsonFile,
        });
      })
      .catch((err) => console.log(err));
  }

  oneUserClickHandle = (eventValue) => {
    this.setState({
      clickedUserId : eventValue,
    });
  }

  filterClickedUser = () => {
    return this.state.users.filter((user) => user.id===this.state.clickedUserId)[0];
  }

  onCloseButtonClickHandle = () => {
    this.setState({
      clickedUserId : null,
    });
  }

  onSearchChangeHandle = (inputString) => {
    this.setState({
      searchString : inputString,
    });
  }

  filterSearchInput = () => {
    return this.state.users.filter((user) => 
      user.firstName.toLowerCase().includes(this.state.searchString)||
      user.lastName.toLowerCase().includes(this.state.searchString));
  }

  render(){
    return (
      <div className="App">
        <EnhancedUsersList users={this.filterSearchInput()} 
          oneUserClicked={this.oneUserClickHandle} 
          onSearchChange={this.onSearchChangeHandle}/>
        <UserProfile newClassName={this.state.clickedUserId? 'active':''} 
        userInfo={this.filterClickedUser()} 
        onCloseButtonClick={this.onCloseButtonClickHandle}/>          
      </div>
    );
  }
}

export default App;