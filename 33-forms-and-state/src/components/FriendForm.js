import React from "react";

class FriendForm extends React.Component {
  state = {
    name: ""
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onChangeAuthor(this.state);
    this.setState({name:""})
  };

  handleUpdateName = e => {
    console.log(e.target.value);
    if (e.target.value.includes("i")) {
      this.setState({ name: "NO I's BUDDY!!" });
    } else {
      this.setState({ name: e.target.value });
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitForm}>
          <label>Add new Friend</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleUpdateName}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}

export default FriendForm;
