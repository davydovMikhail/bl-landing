import Header from './components/header';
import Bubble from './components/bubble';
import About from './components/about';

function App() {
  return (
    <main>
      <Header />
      <div className="bg-wrapper">
        <Bubble />
        <About />
        
      </div>
    </main>
  );
}

export default App;
