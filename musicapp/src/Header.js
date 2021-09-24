import './header.css'
import {HiOutlineLogout} from "react-icons/hi"


function Header(){
    return(
        <>
            <div className="header-area">
                <div className="logout"><HiOutlineLogout/></div>
                <div className="header">
                    <img src="https://s.discogs.com/a0f2cb35613e649f9eb9a7e4ce6c3457ad2fc7c2/images/discogs-white.png?5"></img>
                </div>
            </div>
        </>
    )
}

export default Header
