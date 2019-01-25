import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';
import { Route, Link } from 'react-router-dom';

  

class App extends Component {
  constructor() {
    super();
      this.state = {
        friends: [],
        error: '',
        newFriend: {
          name:'',
          age: '',
          email:''
        }
    }
  }

componentDidMount() {
  axios
    .get('http://localhost:5000/friends')
    .then(res => {
      this.setState({
        friends: res.data})
      })
        .catch(err => 
          console.log(err))
        
}

addNewFriend = () => {
  axios.post(`http://localhost:5000/friends`, this.state.newFriend)

  .then(res => {
    this.setState({ friends: res.data})
    this.props.history.push('/') 
    })

    .catch(err => console.log(err))
}


deleteFriend = (e, id) => {
  e.preventDefault();
  axios
  .delete(`http://localhost:5000/friends/${id}`)
  .then(res => {
    this.setState({ friends: res.data})
  })
  .catch(err => {
    console.log(err)
  })
   
}

updateFriend = () => {
  axios
  .put(`http://localhost:5000/friends/${this.state.newFriend.id}`,this.state.newFriend)
  .then(res => {
    this.setState({
      friends: res.data,
      isUpdating: false,
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    })
    this.props.history.push('/')
  })
  .catch(err => {
    console.log(err);
  })
}



populateForm = (e, id) => {
  e.preventDefault();
  this.setState({
    newFriend: this.state.friends.find(update => update.id === id),
    isUpdating: true
  })
  // this.props.history.push('/friend-form')
}


handleChanges = e => {
  e.persist();
    this.setState(prevState => {
      return {
        newFriend: {
          ...prevState.newFriend,
          [e.target.name]: e.target.value 

        }
      }
    })
    
}



render() {
    return (

      <div className="App">

      <div className="friendLinks">
      <Link to= '/'> Friends </Link>
      <Link to= '/friend-infoInput' > Add Friends </Link>
      <Link to= '/friend-form'> {this.state.isUpdating ? 'Update' : ''} Update</Link>
      </div>

      <Route path="/friend-infoInput" render={props =>
      <FriendForm {...props}
      addNewFriend={this.addNewFriend}
      newFriend={this.state.newFriend}
      handleChanges={this.handleChanges}
      isUpdating={this.isUpdating}
      updateFriend={this.updateFriend}
      /> } />

      <Route exact path='/' render={props => <FriendList {...props}
      friends={this.state.friends}  
      deleteFriend={this.deleteFriend}
      populateForm={this.populateForm}
      /> } />

     

      </div>
    );
  }
}





export default App;
