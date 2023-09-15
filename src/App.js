import './App.css';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import EditUser from './components/EditUser';

import Header from './components/Header';
import { BrowserRouter as  Router ,Routes ,Route } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Header />
        <Routes>        

          <Route path="/" exact element={<Home />} />
          <Route path="/PlayersList"  element={<AllUser/>}/>
        <Route path="/Add_Player" element={<AddUser />} />
        <Route path='/edit/:id'  element={<EditUser/>}/>
 

 
        </Routes>
   
      </Router>
    
 

  );
}

export default App;
