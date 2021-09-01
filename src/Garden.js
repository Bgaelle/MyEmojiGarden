import React from "react";
import "./style.css";

class Garden extends React.Component {
  constructor(props) {
    super(props);
    this.state = { garden: props.garden };
  }

// 1er montage du composant
  // componentDidUpdate() {
  //   console.log("numberOfEmojis", this.getNumberOfEmojis());
  // }

// fonction pour calculer le nbr d'emoji dans le tableau
  getNumberOfEmojis = () => {
    let numberOfEmojis = this.state.garden.filter(
      (element) => element.emoji !== ""
    );
    return numberOfEmojis.length;
  };

    // Ajouter un emoji
  addPlant = () => {
    this.growGarden(); 
    // condition pour ajouter un emoji = tableau pas plein
    if (this.getNumberOfEmojis() < 25) {
      // New garden est un clone de garden pour modifier la valeur 
      let newGarden = [...this.state.garden]; 
       // Rechercher le 1er élément qui correspond aux paramètres, ici = case sans emoji
      newGarden.find((element) => element.emoji === "").emoji = "🌱"; 
      // Mise à jour de garden avec son clone
      this.setState({ garden: newGarden });
    }
  };

  // Fonction pour faire pousser les plantes avec un timer 
  growGarden = () => {
    let newGarden = [...this.state.garden];
    newGarden.map((elem) => {
      if (elem.emoji === "🌱") return (elem.emoji = "🌿");
      else if (elem.emoji === "🌿") return (elem.emoji = "🌲");
      else return elem.emoji;
    });
    this.setState({ garden: newGarden });

    // Appel de setTimeout quand growGarden a été executé  > 2000 = à 2sec
    if (this.state.garden.length > 0) {
      setTimeout(() => {
        this.growGarden();
      }, 2000);
    }
  };

  // Delete une plante en cliquant sur sa case
  deletePlant = (id) => {
    let newGarden = [...this.state.garden];
    newGarden[id].emoji = "";
    this.setState({ garden: newGarden });
  };

  render() {
    return (
      <>
      <section class="flexContainer">
        <div className="gardenContainer">
          {this.state.garden.map((elem) => {
            return (
              <button
                key={elem.id}
                className="cell"
                onClick={() => this.deletePlant(elem.id)} 
              >
                {elem.emoji}
              </button>
            );
          })}
        {/* </div> */}
        {/* <div class="Plant"> */}
        <button class="boutonPlant" onClick={this.addPlant}>Plant an Emoji</button>
        </div>
        </section>
      </>
    );
  }
}

export default Garden;
