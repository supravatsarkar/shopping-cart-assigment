import './App.css';
import Header from './components/Header.js/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      <Header></Header>
      <Shop></Shop>
    </div>
  );
}

export default App;
