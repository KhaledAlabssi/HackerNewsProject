import {useState} from "react" 

export default function SearchBar() {
    const[search, setSearch] = useState('')
    const searchArticles = (e) =>{
        setSearch(e.target.value)
    }
    return(
        <div className="searchbar">
        <input type="text" placeholder="Search" onChange={searchArticles}></input>
        <button role="submit">Go</button>
        </div>
    )
}