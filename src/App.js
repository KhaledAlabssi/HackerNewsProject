import React, {useState, useEffect} from 'react';
import List from './component/List'
import SearchBar from './component/SearchBar';
import AppThemes from './component/Themes'
import Darkmode from './Darkmode'
import './App.css';

function App() {
  const [result, setResult] = useState([])
  const [searchUrl, setSearchUrl] = useState('http://hn.algolia.com/api/v1/search?query=')
  const themes = ["light-mode", "dark-mode"]
  const [appTheme, setAppTheme] = useState(themes[0])
  const changeAppTheme = (value) => {
    setAppTheme(value)
  }
  const fetchArticles = () => fetch(searchUrl)
  useEffect( () => {
   fetchArticles()
   .then(response => response.json())
   .then(data => setResult(data.hits))
   const updateArticleList = setInterval(() => {
    fetchArticles()
    console.log(`${searchUrl}, fetching`)
    // .then(response => response.json())
    // .then(data => setResult(data.hits))
  }, 300000)

  //stops fetching data from previous search query
  return () => {clearInterval(updateArticleList)
  console.log('stop')}

  }, [searchUrl])
  

  

  
  return (
    <div className="App" id={appTheme + "-list"}>
      {/* {result.map(i => <h1>{i.title}</h1>)} */}
      <AppThemes themes={themes} callback={changeAppTheme}/>
      <SearchBar result ={result} setSearchUrl = {setSearchUrl} searchUrl={searchUrl} />
      <List result={result} setSearchUrl = {setSearchUrl} searchUrl={searchUrl}/>
      
      
      
      {
          // THIS IS LIKE A SWITCH,
          // to change the component based on which theme we choose
          // its just javascript, accessing an object dynamically ©Chris
          {
            "lightmode": <List result={result} setSearchUrl = {setSearchUrl} searchUrl={searchUrl}/>,
            darkmode: <Darkmode result={result} setSearchUrl = {setSearchUrl} searchUrl={searchUrl}/>,
          }[themes]
        }
    </div>
  );
}

export default App;
