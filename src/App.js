import './App.css';
import './utils/utils.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/home';
import Categories from './pages/categories';
import Container from './components/pagecontainer/pageContainer';
function App() {
  return (
    <div className="App">
           {/* <BrowserRouter> */}
           
           <div className='container flexing-center'>
             <Container/>
           {/* <Routes>
             <Route path="/" exact element={<Home/>}/>
             <Route path="/categories" exact element={<Categories/>}/>
           </Routes> */}
           </div>
           {/* </BrowserRouter> */}
    </div> 
  );
}

export default App;
