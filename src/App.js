import './App.css';
import AboutUs from './Components/About/AboutUs';
import Company from './Components/Company/Company';
import Courses from './Components/Courses-section/Courses';
import Header from './Components/Header/Header';
import HeroSection from './Components/Hero-Section/HeroSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Company />
      <AboutUs />
      <Courses />
      
    </div>
  );
}

export default App;
