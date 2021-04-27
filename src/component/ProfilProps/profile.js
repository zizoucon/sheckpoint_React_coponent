import React, { Component } from 'react';
import PropTypes from 'prop-types';

const  Profile_component =({fullName,bio,profession,handelName,children})=>{
const style={
  margin: "5px",
  borderRadius: "5px",
  border: "none",
  width: "100px",
  padding: "5px",
  backgroundcolor:"blanchedalmond"}


 const handleAlert= (e)=>{
  return handelName(fullName);
}


        return ( 
              <div style={{display :"flex",color: "white",backgroundColor: "DodgerBlue",
                padding: "25px",
                fontFamily:"Arial"}}>
            <div style={{width: "20%",
    margin: "5px",
    padding: "5px",}}>
                  <div>
                    {children}
                  </div>
                  <div style={{     padding: "5px",
    margin: "5px"}}>
      <button style={style} onClick={handleAlert} >click</button></div>
          </div>

          <div style={{ width: "70%"}}>
          <div style={{    padding: "10px",
    fontSize: "xx-large",
    fontFamily: "monospace"}}>{fullName}</div>
          <div style={{    padding: "10px",
    fontSize: "x-large",
    fontFamily: "monospace"}}>{profession}</div>
          <div style={{    padding: "10px",
    fontSize: "large",
    fontFamily: "monospace"}}>{bio}</div>
          </div>

</div>

            
         );
    }
    Profile_component.propTypes = {
  fullName: PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,


  };
  Profile_component.defaultProps = {
    fullName: 'kemmouche zineb',
    bio:'developper',
    profession:'fyfytfytz'
  };
//   dans le child : <button  onClick={onClick}>
// dans le parent : <Button  onClick={greetPeople}  />
// et la we need to define the greetPeople function in the parent 
 
export default Profile_component;