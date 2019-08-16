import React from 'react';
import classes from './Car.css'

//import withCssClass from '../hoc/withCssClass'
import {withRouter} from 'react-router-dom'


const Car = props => {
    return(
        <div className={'Car'}

            onClick={()=> props.history.push('/cars1/' + props.name)}
>
            <h3>Car name: {props.name}</h3>
            <p>Year: <strong>{props.year}</strong></p>
         </div>
        
    )
}

// export default Car
export default withRouter(Car)