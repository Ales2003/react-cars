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
    showCars:  false,
  }

  handleButtonCkick = (newTitle) => {
      console.log('in handleButtonCkick');
      console.log('button clicked');

      this.changeTitle(newTitle);
  }

  changeTitle = pageTitle => {
    this.setState({pageTitle})
  }
  
  // changeTitle  = (title) => {
  //   console.log('in title change');

  //   const newTitle = title;

  //   this.setState({
  //     pageTitle:newTitle
  //   });
  // }

  toggleCarsHandler = () => {
    console.log('In toggleCarsHandler');
    this.setState({
      showCars: !this.state.showCars 
    })
  }

  render (){
    console.log('in title change');
    const divStyle = {
      textAlign: 'center',
    }
    
let cars = null
if (this.state.showCars) {
  cars = this.state.cars.map((car, index) => {
    return (
      <Car 

        key = {index}
        index = {index} dc
        name = {car.name} 
        year = {car.year}
        onChangeTitle = {() => this.changeTitle(car.name)} 
      />
    )
  })
}

    return (
      <div style={divStyle} >
        <h1>{this.state.pageTitle}</h1>

        <button 
          onClick={this.toggleCarsHandler}
          >Toggle cars</button>

          {/* { this.state.showCars
            
            ? this.state.cars.map((car, index) => {
            return (
              <Car 

                key = {index}
                index = {index} dc
                name = {car.name} 
                year = {car.year}
                onChangeTitle = {() => this.changeTitle(car.name)} 
              />
            )
          }) 
          : null
        } */}

        { cars }
      
      </div>
    )
  }
}

export default App;
