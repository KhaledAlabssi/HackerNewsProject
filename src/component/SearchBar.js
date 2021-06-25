import {useState} from "react" 

export default function SearchBar({searchUrl, setSearchUrl}) {
    const[search, setSearch] = useState('')
    //gets text input value
    const searchArticles = (e) =>{
        setSearch(e.target.value)
    }
    //changes the search query to whatever the user typed
    const submitSearch = (e) =>{
        e.preventDefault()
        setSearchUrl(`http://hn.algolia.com/api/v1/search?query=${search}`)
        // console.log(searchUrl)
        // setSearch("")
        // console.log(search)
    }
    
    return(
        <form>
            <div className="searchbar">
                <input type="text" placeholder="Search" onChange={searchArticles}></input>
                <button type="submit" onClick={submitSearch}>Go</button>
            </div>
        </form>
    )
}
