
// JSX - Javascript XML - Extension to the javascript language syntx
import React from 'react';
const JSXComponent = () => {
    let a = 30, b = 40;
    //return (
        // <div>
        //     <h2> Rushi Learning JSX Components </h2>
        //     <h3>Addition of two numbers :{a + b}</h3>
        //     <h4>{a>60 ? "A is gretter than 60":"A is less than 60"}</h4>
    // </div>
    //)
        // React.createElement(string name of element,property,value  in string)

       return React.createElement('div',null, React.createElement('h2',null,'Hello I am JSX comp'))
    
}

export default JSXComponent;