import React from "react";
import { connect } from "react-redux";
import {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setPositions,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users/Users";
import Registration from "./Registration/Registration";

class UsersContainer extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.users);
      });

    axios
      .get("https://frontend-test-assignment-api.abz.agency/api/v1/positions")
      .then((response) => {
        this.props.setPositions(response.data.positions);
      });
  }

  render() {
    return (
      <div>
        <Users users={this.props.users} />
        <Registration positions={this.props.positions} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    positions: state.usersPage.positions,
  };
};

export default connect(mapStateToProps, {
  setUsers,
  setTotalUsersCount,
  setCurrentPage,
  setPositions,
})(UsersContainer);
