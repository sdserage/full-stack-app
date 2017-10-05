import React,{Component} from 'react';
import './Private.css';
//import axios from 'axios';
import {getUserInfo} from '../../ducks/users';
import {connect} from 'react-redux';

/* export default */ class Private extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: {}
    }
  }

  // componentDidMount(){
  //   axios.get('/auth/me')
  //     .then(res=>{
  //       userInfo: res.data
  //     });
  // }

  componentDidMount(){
    this.props.getUserInfo();
  }

  bankBalance(){
    return '$' + Math.floor((Math.random() + 1) * 100000) + '.00';
  }

  render(){
    let user = this.props.user;
    return (
      <div className=''>
        <h1>Community Bank</h1><hr />
        <h4>Account information:</h4>
        {user.id ? <img className='avatar' src={user.img} alt='avatar'/> : null}
        <p>Username: {user.id ? user.user_name : null}</p>
        <p>Email: {user.id ? user.email : null}</p>
        <p>ID: {user.id ? user.auth_id : null}</p>
        <h4>Available balance:  {this.bankBalance()}</h4>
        <a href='http://localhost:3001/auth/logout'><button>Log out</button></a>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps,{getUserInfo})(Private);
