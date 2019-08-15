import React, {Component} from 'react';

class Car extends Component {

    constructor(props){
        super(props);
        console.log('Car constructor', props);
    }

    componentDidMount(){
        console.log('Car componentDidMount - after render')
      }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('Car componentWillReceiveProps', nextProps);
        //для синхронизации локального стейт с новыми пропс
    }

    shouldComponentUpdate(nextProps, nextState){
        //можно сделать проверку и вернгуть false 
        //не будут вызываться остальные апдейт методы и рендер 
        //(чтобы удучшить перфоманс, не тратить силы на отрисовки)
        console.log('Car shouldComponentUpdate', nextProps, nextState);
        //например, тримить пробелы
        return nextProps.name.trim() !== this.props.name.trim();
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        //если true в предыдущзем методе
        //какая-то синхронизхация лок стейт с новыми пропс 
        console.log('Car componentWillUpdate', nextProps, nextState);
    }
    
    //componentWillUpdate
    //опасность: если обратимся this.state, но компонент еще нге отрисован

    //SOLUTION > 16.3
    static getDerivedStateFromProps(nextProps, prevState){
        //нет доступа к this
        console.log('Car getDerivedStateFromProps', nextProps, prevState);
        return {
            prevState
        }
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Car componentDidUpdate', prevProps, prevState);
    }

    getSnapshotBeforeUpdate(){
        //после рендер
        //можем получить dom дерево до обновления
        console.log('C ar getSnapshotBeforeUpdate');
    }

    componentWillUnmount(){
        console.log('Car componentWillUnmount');
    }

    render (){
        console.log('Car render');
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