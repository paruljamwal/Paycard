import logo from './logo.svg';
import './App.css';
import Card from './Componets/Card';
import {GrApple} from 'react-icons/gr'
import {AiOutlineAmazon} from 'react-icons/ai'
 function App() {

  
  return (
    <div className="App">
       <Card
       color='orange'
       date='28/10/2020'
       logo={<AiOutlineAmazon/>}
       name='Amazon Gift'
       scheme='Pay'
       mobile='Desktop - Mobile'
       ></Card>


       <Card
       color="silver"
       date='17 Sep 2020'
       logo={ <GrApple/>}
       name='Apple Gift'
       scheme='Payment'
       mobile='MacOS - Mobile'
       ></Card>
    </div>
  );
}

export default App;
