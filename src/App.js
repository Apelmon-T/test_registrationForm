import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Relationships from "./components/Relationships/Relationships";
import Requirements from "./components/Requirements/Requirements";
import UsersContainer from "./components/Users/UsersContainer";

function App() {
  return (
    <div className={styles.app_wrapper}>
      <Header />
      <Relationships />
      <Requirements />
      <UsersContainer />
    </div>
  );
}

export default App;
