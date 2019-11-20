import React from "react";
import FriendBrowser from "./FriendBrowser";
import FriendForm from "./FriendForm";

class App extends React.Component {
  state = {
    author: "Cody",
    friendsList: [{ name: "Cha" }, { name: "Cole" }]
  };

  changeAuthor = newFriend => {
    this.setState({
      author: this.state.author,
      friendsList: [...this.state.friendsList, newFriend]
    });
  };

  render() {
    return (
      <>
        <h1>Hello from My Friend App</h1>
        <FriendForm onChangeAuthor={this.changeAuthor} />
        <FriendBrowser
          friendList={this.state.friendsList}
          author={this.state.author}
        />
      </>
    );
  }
}

export default App;
