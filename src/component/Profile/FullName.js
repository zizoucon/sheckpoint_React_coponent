
 import React, { Component } from 'react';
 const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "25px",
    fontFamily: "Arial"
    
  };
class FullName extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
            <header >
                <h1 style={mystyle}> Kemmouche Zineb</h1>
            </header>
         );
    }
}
 
export default FullName;
