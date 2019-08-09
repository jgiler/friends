import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title"
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  }

  removeFriend = (id) => {
    console.log(`this removes friend ${id}`)
    const newFriends = this.state.friends.filter(f => f.id !== id)
    this.setState({friends: newFriends})
  }

  render () {

  return (
    <Wrapper>
      <Title title={'this is going to be fun'}/>
      <h1 className="title">Friends List</h1>
      {this.state.friends.map((f, index) => {
        return (
          <FriendCard 
          id = {f.id}
          removeFriend = {this.removeFriend}
          key = {index}
          name={f.name}
          image={f.image}
          occupation = {f.occupation}
          location = {f.location}
          />
        )
      })}
    </Wrapper>
    );
  }
}

export default App;