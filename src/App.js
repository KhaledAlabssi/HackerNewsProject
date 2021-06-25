import React, {useState, useEffect} from 'react';
import List from './component/List'
import SearchBar from './component/SearchBar';
import './App.css';

function App() {
  const [result, setResult] = useState([])
  const [searchUrl, setSearchUrl] = useState('http://hn.algolia.com/api/v1/search?query=')
  useEffect( () => {
   fetch(searchUrl)
  .then(response => response.json())
  .then(data => setResult(data.hits));

  }, [searchUrl])
  

  

  
  return (
    <div className="App">
      {/* {result.map(i => <h1>{i.title}</h1>)} */}
      <SearchBar setSearchUrl = {setSearchUrl} searchUrl={searchUrl}/>
      <List result={result} setSearchUrl = {setSearchUrl} searchUrl={searchUrl}/>
      
      
    </div>
  );
}

export default App;
