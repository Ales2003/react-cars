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

  changeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    
    //not allowed 
    //this.state.cars[index] = car;
    
    //not allowed, because we get link
    //const cars = this.state.cars;

    //1. cloning 
    //const cars = this.state.cars.concat(); 
    
    //modern
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      //если совпадают ключ и значение - можно не писать cars: cars
      cars
    })

  }

  toggleCarsHandler = (index) => {
    console.log('In toggleCarsHandler');
    this.setState({
      showCars: !this.state.showCars 
    })
  }

  deleteHandler (index) {
    console.log('Delete');
    console.log(this.state.pageTitle);
    
    const cars = this.state.cars.concat(); 
    cars.splice(index, 1);

    this.setState({
      cars
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
            onChangeName = {event => this.changeName(event.target.value, index)} 
            onDelete={this.deleteHandler.bind(this, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle} >
        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

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

        { cars}
      
      </div>
    )
  }
}

export default App;
