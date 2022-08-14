
import './App.css';
import NavigationBar from './components/NavigationBar';
import './style/landingPage.css'
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/Superhero';

function App() {
  return (
    <div>
      {/* Intro Begin */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />  
      </div>
      {/* End Of Intro */}

      {/* Trending Section Begin */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End Of Trending Section */}

      {/* Superhero Section Begin */}
      <div className='superhero'>
        <SuperHero />
      </div>
      {/* End Of Superhero Section */}

    </div>
    
  );
}

export default App;
