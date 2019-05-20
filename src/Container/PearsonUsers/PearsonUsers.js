import React, { Component } from "react";

import './PearsonUsers.css'
import {getFetchData} from '../../API/Api'
import {PearsonUser} from '../../Component/PearsonUser/PearsonUser'
import {users_url} from '../../API/ApiUrls'

export default class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  // Fecth user list from api
  componentDidMount() {
    getFetchData(users_url+'?page=1&per_page=10')
    .then(response => this.deleteDuplicateUser(response.data));
  }

  // delete user from state
  deleteUser = (id) => {
    let userId = this.state.users.findIndex(x => x.id === id);
    this.setState(this.state.users.splice(userId,1));
  }

  // Delete deplicate user
  deleteDuplicateUser = (userData) => {
    let mergeUserData = [...this.state.users, ...userData]
    let unique_users = mergeUserData.reduce((x, y) => x.findIndex(e=>e.id===y.id)<0 ? [...x, y]: x, [])
    this.setState({...this.state.users, users:[...unique_users]})
  }

  // Get User list from state
  getUserList = () => {
    return this.state.users.map((user) => <PearsonUser key={user.id} user={user} deleteUser={this.deleteUser}  />)
  }

  render() {
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        <div className="users-list">
          {this.getUserList()}
        </div>
      </div>
    );
  }
}
