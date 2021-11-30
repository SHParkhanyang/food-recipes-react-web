import React from 'react';
//import styles from './Navbar.css';

function Header() {
  return (
      <header className='header'>
        <strong>Header</strong>
        <ul>
          <li>
            <button>Home</button>
          </li>
          <li>
            <button>Profile</button>
          </li>
        </ul>
      </header>
  );
}

export default Header;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
 */
