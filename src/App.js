import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';
import './App.css';
import './style/landingPage.css';
function App() {
  return (
    <div>
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>

      <div className='trendingMovie'> 
        <Trending />
      </div>
      <div className='superHero'> 
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
