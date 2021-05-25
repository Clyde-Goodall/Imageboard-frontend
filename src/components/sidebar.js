import {Link} from 'react-router-dom';

function Sidebar() {

    return(
            <>
                
                <div className="mx:w-auto h-screen bg-black box-border p-4 w-96 bg-opacity-20 border-r border-black border-opacity-10">
                    <Link to='/'>
                        <button 
                        className="sidebar-button">
                            Home
                        </button>
                    </Link>
                    <a target="_" href="https://github.com/Clyde-Goodall/Imageboard-frontend">
                        <button 
                        className="sidebar-button">
                            Github
                        </button>
                        </a>
                </div>

            </>
    )
}

export default Sidebar;
