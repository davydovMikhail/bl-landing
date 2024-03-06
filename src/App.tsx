import Header from './components/header';
import Bubble from './components/bubble';
import About from './components/about';
import Features from './components/features';
import Tokenomics from './components/tokenomics';

function App() {
  return (
    <main>
      <Header />
      <div className="bg-wrapper">
        <Bubble />
        <About />
        <Features />
        <Tokenomics />
        
      </div>
    </main>
  );
}

export default App;
