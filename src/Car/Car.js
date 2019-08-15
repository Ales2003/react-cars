import React, {Component} from 'react';

class Car extends Component {
    render (){
        return(
            <div style={{
                    border: '1px solid #ccc',
                    marginBottom: '10px',
                    display: 'block',
                    padding: '10px'
                }}>
            <h3>Car name: {this.props.name}</h3>
            <p>Year: <strong>{this.props.year}</strong></p>
            <input type="text" onChange={this.props.onChangeName} value = {this.props.name}/>
            <button onClick={this.props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car