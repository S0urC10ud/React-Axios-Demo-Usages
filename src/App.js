import logo from './logo.svg';
import './App.css';
import GetUser from './components/GetUser.js';
import ListUsers from './components/ListUsers.js';


function App() {
  return (
    <div className="App">
      <GetUser/>
      <ListUsers/>

    </div>
  );
}

export default App;
