import logo from './logo.svg';
import './App.css';
import FullName from './component/Profile/FullName';
import ProfilePhoto from  './component/Profile/ProfilePhoto'
import Adress from  './component/Profile/Adress'

function App() {
  return (
    <div className="App">
      <FullName></FullName>
      <ProfilePhoto></ProfilePhoto>
      <Adress></Adress>
    </div>
  );
}

export default App;
