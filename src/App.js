
import './App.css';
import Firstdiv from './components/Firstdiv';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Videodiv from './components/Videodiv';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Firstdiv/>
     <Videodiv/>
     <Service/>
     <Footer/>
    </div>
  );
}

export default App;
