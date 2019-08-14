import React from 'react';

//1
// function Car(){
//     return (
//         <div>This is react component </div>
//     )
// }
//
//export default Car


//2.
// const Car = () => {
//     return (
//         <div>This is react component </div>
//     )
// } 
//
//export default Car

//3.
// const Car = () => <div>This is react component 3 </div>
//
// export default Car

//4
export default (props) => (
    <div>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        {props.children}
    </div>
)