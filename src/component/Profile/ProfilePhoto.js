
import React, { Component } from 'react';
import ProfiLogo from './zineb.jpg';

const im={
    width: "200PX",
};
class ProfilePhoto
 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
       
        return ( 
            <section>
                <img src={ProfiLogo} style={im}></img>
            </section>
         );
    }
}
 
export default ProfilePhoto
;