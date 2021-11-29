import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Cart from  './components/cart'

class App extends React.Component {

  constructor() {
    super() 
    this.state = {
        clicked: false,
        name: ''
    }
  }

  saveName(e) {
    e.preventDefault() 
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
          <body className='app-header'> 
            <h1>Random Age Guesser</h1>
            <label>Please Enter A Name 
              <input onChange={(e) => this.saveName(e)}></input>
            </label>
            <button onClick={() => this.setState({ clicked: !this.state.clicked})}>Guesstimate</button>
            {this.state.clicked ? <Cart name={this.state.name}/> : null}
          </body>
        </header>
      </div>
    );
  }
}

export default App;
