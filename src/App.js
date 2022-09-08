import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonials/Testimonials';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login&Signup/Login';
import SignUp from './components/Login&Signup/SignUp';






function App() {
  return (

    <div className="App">
    <Router>
    <Header />
   
      <Routes>
        <Route exact path="/" element={<Hero/>} />
        <Route path="/programs" element={ <Programs/>} />
        <Route path="/reasons" element={<Reasons />} />
        <Route path="/plans" element={ <Plans/>} />
        <Route path="/Testimonials" element={ <Testimonials />} />
        <Route path="/join" element={ <Join />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/register" element={ <SignUp />} />
    
      </Routes>
    
    <Footer />
  </Router>
  </div>

  
   );
}

export default App;
