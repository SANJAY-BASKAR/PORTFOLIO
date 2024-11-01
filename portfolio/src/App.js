import './App.css';
import Header from "./components/Header"
import Hero from './components/Hero';
import Who from './components/Who';
import Mover from './components/Mover';
import MidFooter from './components/MidFooter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Who />
      <Mover />
      <MidFooter />
      <Footer />
    </div>
  );
}

export default App;
