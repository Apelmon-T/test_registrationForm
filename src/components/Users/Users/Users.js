import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={styles.usersBack}>
      <div>
        <h2>Our cheerful users</h2>
      </div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.photo} />
            <div>{user.name}</div>
            <div>{user.position}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
          </div>
        );
      })}
      <button>Show more</button>
    </div>
  );
};

export default Users;
