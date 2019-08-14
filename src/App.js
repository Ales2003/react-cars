import React, { Component } from 'react';
import './App.css';
import Car from  './Car/Car';

class App extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
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

    //const oldTitle = this.state.pageTitle;
    //const newTitle = oldTitle + ' ' +title;
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

    const cars = this.state.cars;


    return (
      <div style={divStyle} >
        <h1>{this.state.pageTitle}</h1>

        <input type = "text" onChange={this.handleInput}/>

        <button onClick={this.handleButtonCkick.bind(this, 'Changed!')}>Change title</button>

        {/* байндинг. байндинг не вызывает ф-ю, а привязывает ее к this. также передаем параметры  */}
        {/* лучше для браузера, т.к.  меньше ресурсов требует  */}
        <Car 
        name={cars[0].name} 
        year = {cars[0].year}
        onChangeTitle={this.changeTitle.bind(this, cars[0].name)}/>

        {/* передаем функцию, и при нажатии в чилде вызывается внутренняя функция */}
        <Car 
        name={cars[1].name} 
        year = {cars[1].year}
        onChangeTitle={() => this.changeTitle(cars[1].name)}/> 
        
        <Car 
        name={cars[2].name} 
        year = {cars[2].year}
        onChangeTitle={() => this.changeTitle(cars[2].name)}/> 
      </div>
    );
  }s
}

export default App;
