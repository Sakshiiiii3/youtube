import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex'> 
        <Sidebar />
        <Body />
      </div>
     
    </div>
  );
}

export default App;
