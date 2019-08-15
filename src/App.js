import React, { Component } from 'react';
import './App.css';
import Car from  './Car/Car';
import ErrorBoundary from  './ErrorBoundary/ErrorBoundary';

class App extends Component {

  constructor(props){
    console.log('App constructor1');
    super(props)
    console.log('App constructor2');
    this.state = {
      cars: [
        {name: 'Ford', year: 2012},
        {name: 'Audi', year: 2016},
        {name: 'Mazda', year: 2012},
      ],
      pageTitle: 'React Components',
      showCars:  false,
    }
  }
  
  handleButtonCkick = (newTitle) => {
      console.log('in handleButtonCkick');
      console.log('button clicked');

      this.changeTitle(newTitle);
  }

  changeName = (name, index) => {
    const car = this.state.cars[index];
    car.name = name;
    
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

  UNSAFE_componentWillMount(){
    console.log('App componentWillMount - before render')
  }

  componentDidMount(){
    console.log('App componentDidMount - after render')
  }

  // componentWillUpdate(){
  //   console.log('App componentWillUpdate - before render')
  // }

  render (){
    console.log('App render');
    const divStyle = {
      textAlign: 'center',
    }
    
    let cars = null
    
    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <ErrorBoundary key={index}>
            <Car 
              name = {car.name} 
              year = {car.year}
              onChangeName = {event => this.changeName(event.target.value, index)} 
              onDelete={this.deleteHandler.bind(this, index)}
            />
            </ErrorBoundary>
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
