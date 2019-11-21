import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
    this.fetchPets();
  }

  adoptPet = id => {
    console.log(id);

    this.setState(prevState => {
      return {
        pets: prevState.pets.map(pet => {
          if (pet.id === id) {
            pet.isAdopted = true;
          }
          return pet;
        })
      };
    });
  };

  changeType = newType => {
    this.setState({
      filters: {
        type: newType
      }
    });
  };

  fetchPets = () => {
    const { type } = this.state.filters;
    fetch(`/api/pets${type === "all" ? "" : "?type=" + type}`)
      .then(resp => resp.json())
      .then(data => this.setState({ pets: data }));
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.changeType}
                onFindPetsClick={this.fetchPets}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
