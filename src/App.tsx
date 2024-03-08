import Header from './components/header';
import Bubble from './components/bubble';
import About from './components/about';
import Features from './components/features';
import Tokenomics from './components/tokenomics';
import Dapp from './components/dapp';
import Taxes from './components/taxes';

function App() {
  return (
    <main>
      <Header />
      <div className="bg-wrapper">
        <Bubble />
        <About />
        <Features />
        <Tokenomics />
        <Dapp />
        <Taxes />
        
      </div>
    </main>
  );
}

export default App;
