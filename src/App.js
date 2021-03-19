import logo from './logo.svg';
import './App.css';
import GetUser from './components/GetUser.js';
import ListUsers from './components/ListUsers.js';
import PostUser from './components/PostUser.js';
import DelayedResponse from './components/DelayedResponse.js';

function App() {
  return (
    <div className="App">
      <GetUser/>
      <ListUsers/>
      <PostUser/>
      <DelayedResponse/>
    </div>
  );
}

export default App;
