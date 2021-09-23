import react,{useState} from 'react'
import {AiOutlineDelete} from "react-icons/ai";
import {BsHeart} from "react-icons/bs";
import {RiAddCircleLine} from "react-icons/ri"


function Playlist(){

    const [data,setData] = useState([
        {id:"1",like:"3",title:"Com Truise - Flightwave",subtitle:"Reed"},
        {id:"2",like:"3",title:"Juice WRLD - Lucid Dreams",subtitle:"Reed"},
        {id:"3",like:"2",title:"Rihanna - Diamonds",subtitle:"doug"},
        {id:"4",like:"2",title:"sia - Chandelier ",subtitle:"Reed"}
    ]) 
    const [filteredSearchData,setFilteredSearchData] = useState([])

    const [song,setSong] = useState({title:"",subtitle:""}) 
    const [searchData,setSearch] = useState("")

    //conditional rendering
    const [showContainer,setShowContainer] = useState(true)
    const [showForm,setShowForm] = useState(false)

    const handleSonginput = (e) =>{
        let newsong = {...song}
        newsong[e.target.id] = e.target.value
        setSong(newsong)
    }

    const handleSearchinput = (e) =>{
        let newSearchdata = e.target.value
        setSearch(newSearchdata)
        let filtered_search = data.filter((item) => 
                                        Object.values(item)
                                        .join("").toLowerCase()
                                        .includes(searchData.toLowerCase()));
        setFilteredSearchData(filtered_search)                                
    }

    const addSong = (e) =>{
        e.preventDefault()
        setData([...data, {id:data.length+1,like:"3",...song}])
        setShowForm(false)
        setShowContainer(true)
    }

    const deleteItem = (e) =>{
        const new_arr = data.filter((item) => item.id != e.target.id);
        setData(new_arr)
        setFilteredSearchData(new_arr)
    }

    const handleLike = (e) =>{
        console.log(data[e.currentTarget.id].like)
        let new_arr = [...data] 
        new_arr[e.currentTarget.id].like++
        setData(new_arr)
    }

    return(
        <>
            {showContainer && <div className="main-container">
                <div className="search-bar">
                    <input onChange={handleSearchinput} type="search"></input>
                    <button type="submit">s e a r c h</button>
                </div>

                <div className="songs-container">
                    
                    {searchData < 1 ? data.map(e=>
                        (<div className="title-container"> 
                            <button id={data.indexOf(e)} onClick={handleLike} className="like-btn" ><BsHeart/> <span>{Number(e.like)}</span></button>
                            <div className="title-div">
                                <h4>{e.title}</h4>
                                <p>{e.subtitle}</p>
                            </div>
                            <p className="delete" id={e.id}  onClick={deleteItem}>DELETE</p>
                        </div>)
                        ) : filteredSearchData.map(e=>
                            (<div className="title-container"> 
                                <button className="like-btn"><BsHeart/><span>{Number(e.like)}</span></button>
                                <div className="title-div">
                                    <h4>{e.title}</h4>
                                    <p>{e.subtitle}</p>
                                </div>
                                <button id={e.id} className="delete-btn" onClick={deleteItem} ><AiOutlineDelete/></button>
                            </div>)
                            )
                        }
                </div>   
            </div>} 

            {showForm && <form>
                    <label for="title">Title</label><br></br>
                    <input type="text" id="title" onChange={handleSonginput} required></input>
                    <br></br>
                    <label for="subtitle">Sub-title</label><br></br>
                    <input type="text" id="subtitle"  onChange={handleSonginput} required></input>
                    <br></br>
                    <button type="submit" onClick={addSong}>ADD</button>    
            </form>} 

            {showContainer && <button className="add-icon" onClick={()=>{
                            setShowContainer(false)
                            setShowForm(true)
                        }}><RiAddCircleLine/></button>}   

        </>
    )
}

export default Playlist