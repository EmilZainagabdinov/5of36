import React from 'react';
import NumbersDrawer from "./components/NumbersDrawer/NumbersDrawer";
import './App.css';

class App extends React.Component {
  state = {
    numbers: [],
    display: 'none'
  };

  numbersGenerator = () => {
    const numbersSet = new Set();
    const numbersArray = [];

    while (numbersSet.size < 5) {
      const number = Math.floor(Math.random() * 32 + 5);
      numbersSet.add(number);
    }

    for (let item of numbersSet) {
      numbersArray.push(item);
    }

    numbersArray.sort((a, b) => a - b);

    this.setState({
      numbers: numbersArray,
      display: 'flex'
    });
  }

  render() {
    return (
        <div className="App">
          <button className="newNumbers" onClick={this.numbersGenerator}>
            New numbers
          </button>
          <NumbersDrawer numbers={this.state.numbers} display={this.state.display}/>
        </div>
    );
  }
}

export default App;
