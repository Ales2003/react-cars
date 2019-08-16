import React, {Component} from 'react'
import Auxiliary from '../hoc/Auxiliary'
import Counter2 from '../Counter2/Counter2'

export default class Counter extends Component{
    state = {
        counter: 0
    }

    addCounter =  () => {
        // this.setState({
        //     counter: this.state.counter + 1
        // })

        //если setState принимает ф-ю, то она в качестве параметра принимает предыдущий стейт
        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    render (){
        return (
            <Auxiliary>
                <h2>Counter {this.state.counter}</h2>
                {/* излишний парпаметр, просто проброс вниз */}
                {/* избавились от необходимости проброситбь параметр вниз */}
                <Counter2 />
                <button onClick={this.addCounter}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </Auxiliary>
        )
    } 
}