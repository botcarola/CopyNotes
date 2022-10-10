import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Home from './components/Home';
import Settings from './components/Settings';
import Personalizadas from './components/Personalizadas';

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/settings" element={ <Settings /> } />  
        <Route path="/custom-notes" element={ <Personalizadas /> } />    
      </Routes>    
    </BrowserRouter>
  )
}

export default App;
