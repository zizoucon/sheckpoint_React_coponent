
import React, { Component } from 'react';

const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "25px",
    fontFamily: "Arial"
    
  };
class Adress extends Component {
   
    
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
<section >
   
   <h3 style={mystyle} > queen_noor@live.fr</h3>
</section>
         );
    }
}
 
export default Adress ;