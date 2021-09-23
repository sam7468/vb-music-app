import react,{useState} from 'react'
import './header.css'
import Playlist from './Playlist'

function Search(props){

    const handleSearchinput = (e) =>{
        let newSearchdata = e.target.value
        props.setSearch(newSearchdata)
        let filtered_search = props.data.filter((item) => 
                                        Object.values(item)
                                        .join("").toLowerCase()
                                        .includes(props.searchData.toLowerCase()));
        props.setFilteredSearchData(filtered_search)                                
    }


    return(
        <>
            <div className="search-bar">
                    <input onChange={handleSearchinput} type="search"></input>
                    <button type="submit">s e a r c h</button>
            </div>
        </>
    )
}

export default Search
