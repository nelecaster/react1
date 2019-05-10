import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav';
import Header from './components/header/header';
import ImageButton from './components/image-buttons/imageButton';
import Wrapper from "./components/Wrapper";
import pics from './pics.json';



class App extends Component {

  state = {
    pics,
    activeMessage: 'Click an image to begin!',
    score: 0,
    topScore: 0,
    id: null
  };





  shufflePics = (id) => {
    console.log(id);
    function shuffle(arra1) {
      let ctr = arra1.length;
      let temp;
      let index;

      while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
      }
      return arra1;
    }

    const pics = shuffle(this.state.pics);
    this.setState({ pics });
    
    this.setState({ id });

    

    if (id !== this.state.id) {
      let score = this.state.score + 1;
      this.setState({score});
      let activeMessage = 'you scored a point!';
      console.log('worked');
      this.setState({ activeMessage });
    } else if( id === this.state.id && this.state.id !== null) {
      let activeMessage = 'you lose :(';
      this.setState({ activeMessage });
      let score = 0;
      this.setState({ score });
    }

    if (this.state.score > this.state.topScore) {
      let topScore = this.state.topScore + 1;
      this.setState({topScore})
    }
    
  }

  render() {
    return (


      <div>
        <Nav
          activeMessage={this.state.activeMessage}
          pics={pics}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Wrapper>
        <Header />
        
          {this.state.pics.map(pic => (
            <ImageButton
              shufflePics={this.shufflePics}
              id={pic.id}
              image={pic.image}
              name={pic.name}
            />
          ))}


        </Wrapper>
      </div>

    );
  }
}

export default App;
