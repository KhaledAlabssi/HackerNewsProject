import {useState} from "react" 
//installed spinner package from https://www.npmjs.com/package/spinners-react
import { SpinnerRound } from 'spinners-react'

export default function SearchBar({searchUrl, setSearchUrl, result}) {
    const SEARCH_STATUS = {
        _DEFAULT: "Search for articles",
        FOUND_RESULTS: `Check out these articles`,
        //spinner component
        SEARCHING: <SpinnerRound />,
        NOT_FOUND: "Sorry, no results found"
      };
    const [searchStatus, setSearchStatus] = useState(SEARCH_STATUS._DEFAULT);

    const[search, setSearch] = useState('')

// Loads the results in 2 seconds 
    const searchRequest = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve( result ? 200 : 401), 2000);
        });
      };

    //gets text input value
    const searchArticles = (e) =>{
        setSearch(e.target.value)
    }
    //changes the search query to whatever the user typed
    const submitSearch = async (e) =>{
        e.preventDefault()
        setSearchStatus(SEARCH_STATUS.SEARCHING); //displays the spinner component
        const result = await searchRequest();
        switch (result) {
            case 200:
                setSearchStatus(SEARCH_STATUS.FOUND_RESULTS);
                break;
                case 401:
                    setSearchStatus(SEARCH_STATUS.NOT_FOUND); //is supposed to handle the "no results" scenario, but isn't working yet
                    break;
                    default:
                        alert("didn't understand API response");
                        setSearchStatus(SEARCH_STATUS._DEFAULT);
                    }
                    setSearchUrl(`http://hn.algolia.com/api/v1/search?query=${search}`)
        // console.log(searchUrl)
        // setSearch("")
        // console.log(search)
    }
    
    return(
        <form>
            <div className="searchbar">
                <h1>{searchStatus}</h1>
                <input type="text" placeholder="Search" onChange={searchArticles}></input>
                <button type="submit" onClick={submitSearch}>Go</button>
            </div>
        </form>
    )
}
