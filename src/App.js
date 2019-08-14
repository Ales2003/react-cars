import React, { Component } from 'react';
import './App.css';
import Car from  './Car/Car';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2012},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2012},
    ],
    pageTitle: 'React Components',
  }

  handleButtonCkick = (newTitle) => {
      console.log('in handleButtonCkick');
      console.log('button clicked');

      this.changeTitle(newTitle);
  }
  
  changeTitle  = (title) => {
    console.log('in title change');

    const newTitle = title;

    this.setState({
      pageTitle:newTitle
    });
  }

  handleInput = (event)=> {
    console.log('Input changed', event.target.value);
    this.setState({
      pageTitle: event.target.value
    })
  }

  render (){
    console.log('in title change');
    const divStyle = {
      textAlign: 'center',
    }




    return (
      <div style={divStyle} >
        <h1>{this.state.pageTitle}</h1>

        <input type = "text" onChange={this.handleInput}/>

        <button 
          onClick={this.handleButtonCkick.bind(this, 'Changed!')}
          >Change title</button>

          { this.state.cars.map((car, index) => {
            return (
              <Car 

                key = {index}
                index = {index} dc
                name = {car.name} 
                year = {car.year}
                onChangeTitle = {() => this.changeTitle(car.name)} 
              />
            )
          }) }
      
      </div>
    );
  }s
}

export default App;
