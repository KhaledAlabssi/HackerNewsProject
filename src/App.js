import React, {useState, useEffect} from 'react';
import List from './component/List'
import './App.css';

function App() {
  const [result, setResult] = useState([])

  useEffect(() => {
    fetch('http://hn.algolia.com/api/v1/search?query=')
  .then(response => response.json())
  .then(data => setResult(data.hits));

  }, [])
  

  

  
  return (
    <div className="App">
      {/* {result.map(i => <h1>{i.title}</h1>)} */}
      <List result={result} />
      
      
    </div>
  );
}

export default App;
