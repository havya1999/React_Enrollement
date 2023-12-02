import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Showcas from './Component/Showcas';
import Newsletter from './Component/Newsletter';
import Boxes from './Component/Boxes';
import Learn from './Component/Learn';
import Questionaccrodions from './Component/Questionaccrodions';
import Sectioninstruction from './Component/Sectioninstruction';
import Contact from './Component/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Showcas/>
     <Newsletter/>
     <Boxes/>
     <Learn/>
     <Questionaccrodions/>
     <Sectioninstruction/>
     <Contact/>
    </div>
  );
}

export default App;
