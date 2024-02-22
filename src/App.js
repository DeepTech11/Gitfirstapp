import React,{useState} from 'react';
import First from './components/First';
import './App.css';

const App = () => {
  const [cview, setCView] = useState(false);

  const handleVisible = () => {
    setCView(!cview);
  };
  return (
    <>
      <div className="App">
      <header className="App-header">
      <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/368/small/3d-website-developer-working-on-laptop-illustration-png.png" alt="" />  
      <h1>Hello, I am Dinesh Patel</h1>
      <h3>I am Frontend Developer</h3>
      <p>Today, my UI course finishes, but it marks the beginning of a new journey...... </p> 
      {cview && <First />}
      <button onClick={handleVisible}>
        {cview ? 'Take Rest.....' : 'Let Start.......'}
      </button>
      

      
      </header>
      </div>

    </>
  )
}

export default App;
