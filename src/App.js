import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route 
} from "react-router-dom";
import Home from './components/Home';
import Settings from './components/Settings';

const App = () => {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/settings" element={ <Settings /> } />      
      </Routes>    
    </BrowserRouter>
  )
}

export default App;
