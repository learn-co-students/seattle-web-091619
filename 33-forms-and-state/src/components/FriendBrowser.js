import React from "react";
import Friend from "./Friend";

class FriendBrowser extends React.Component {
  render() {
    return (
      <>
        <h3>I'm a FriendBrowser, authored by {this.props.author}</h3>
        <ul>
          {this.props.friendList.map(friend => {
            return (
              <Friend
                friendName={`${friend.name} is a friend of ${this.props.author}`}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default FriendBrowser;
