import React, { Component } from 'react';
import './App.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Car from  './Car/Car';
import Cars from  './Cars/Cars';
import About from  './About/About';
import CarDetail from  './CarDetail/CarDetail';
import ErrorBoundary from  './ErrorBoundary/ErrorBoundary';
// import Counter from './Counter/Counter'

export const ClickedContext = React.createContext(false)

class App extends Component {

  constructor(props){
    console.log('App constructor1');
    super(props)
    console.log('App constructor2');
    this.state = {
      clicked: false,
      cars: [
        //{name: 'Ford', year: {}},
        {name: 'Audi', year: 2016},
        {name: 'Ford', year: 2019},
        {name: 'Mazda', year: 2012},
      ],
      pageTitle: 'React Components',
      showCars:  true,
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
              index = {car.index}
              onChangeName = {event => this.changeName(event.target.value, index)} 
              onDelete={this.deleteHandler.bind(this, index)}
            />
            </ErrorBoundary>
        )
      })
    }

    return (
      <div style={divStyle}>

        <nav className="nav">
          <ul className="ul">
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink 
                to="/about"
                exact 
                activeClassName={'wfm-active'}>About</NavLink>
            </li>
            <li>
              <NavLink 
                to="/about_second_way"
                activeStyle={{
                  color:'blue'
                }}>About second way</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname:"/cars"
              }}>Cars</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname:"/cars1"
              }}>Cars1</NavLink>
            </li>
          </ul>
        </nav>
     

        {/* <ClickedContext.Provider value={this.state.clicked}>
        <Counter />
        </ClickedContext.Provider> */}
        
        <hr/>
          {/* регистрация роута
          1. путь
          localhost: 3000
          2 exact - метка точного совпадения
          3. что должно рендериться (jsx compoonent)_
          */}
          <Switch>
          <Route path={"/"} exact render ={()=><h1>Home Page</h1>}/>
          {/* можно передать колбэк функцию которая возвратит компонент */}
          <Route path={"/about"} exact render ={()=><About />}/>
          {/* или спец аттрибут component */}
          <Route path={"/about_second_way"} exact component={About}/>
          <Route path={"/cars"} render ={()=>cars}/>
          
          <Route path={"/cars1/:name"} component ={CarDetail}/>
          <Route path={"/cars1"} component ={Cars}/>
          <Route render={()=> <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>
          {/* <Redirect to ={'/cars'} /> */}
          </Switch>
      </div>
    )
  }
}

export default App;
