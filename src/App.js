import logo from './logo.svg';
import './App.css';
import FullName from './component/Profile/FullName';
import ProfilePhoto from  './component/Profile/ProfilePhoto'
import Adress from  './component/Profile/Adress'
import Profile from './component/ProfilProps/profile'
import Image from './component/Profile/zineb.jpg'



const im={
  width: "150PX",
};
function App() {

  const handelName=(name)=>{
    alert(`Name of profile user is ${name}` )
  }
  return (
    <div className="App">
      {/* checkpoint componenent */}


      {/* <FullName></FullName>
      <ProfilePhoto></ProfilePhoto>
      <Adress></Adress> */}

{/* terminer */}

      {/*  checkpoint props */}
      <Profile
      fullName='kemmouche zineb'
      profession='Developper'
      bio='A developper Full stack and ......?'  
      handelName={handelName}

      >
      
      <img src={Image} alt='' style={im}></img>
      </Profile>
     {/* terminer */}
 
      


    </div>
  );
}

export default App;
