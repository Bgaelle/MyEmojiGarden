import ReactDOM from "react-dom";
import React from "react";
import Garden from "./Garden";
import "./style.css";

// composant App
class App extends React.Component {
  constructor(props) {
    super(props);
    // le composant farm embarque plusieurs garden
    this.state = { farm: [] }; 
    this.SIZE_GARDEN = 25;
  }

  // création de garden
  generateGarden = (size) => {
    let newGarden = [];
    for (let i = 0; i < size; i++) {
      newGarden.push({ id: i, emoji: "" });
    }
    return newGarden;
  };

  // création d'un garden dans farm 
  addGarden = (size) => {
    let newFarm = [...this.state.farm]; // > le clonage
    newFarm.push(this.generateGarden(size)); // > la modif de la copie
    this.setState({ farm: newFarm }); // > la mise à jour 
  };

  
  // componentDidMount() {
  //   this.addGarden(this.SIZE_GARDEN);
  // }

  // componentDidUpdate() {
  //   console.log("farm:", this.state.farm);
  // }

  render() {
    return (
      <>
      <div class="flexContainer">
        {this.state.farm.map((elem) => {
          // on fait une boucle sur le state farm qui contient nos gardens
          return <Garden garden={elem} />;
        })}
        {/* </div> */}
        
        {/* <div class="Plant"> */}
        </div>
        <button class="boutonAdd" onClick={() => this.addGarden(this.SIZE_GARDEN)}>Add Garden</button>
        
        
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
