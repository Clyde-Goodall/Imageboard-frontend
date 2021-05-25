import {Link} from 'react-router-dom';

function Sidebar() {

    return(
            <>
                
                <div className="mx:w-auto h-full box-border p-4 w-96">
                    <Link to='/'>
                        <button 
                        className="mb-5 bg-black bg-opacity-20 h-16 text-xl font-semibold text-gray-400 w-full font-1xl rounded-3xl shadow-smactive:bg-opacity-90">
                            Home
                        </button>
                    </Link>
                    <a target="_" href="https://github.com/Clyde-Goodall/Imageboard-frontend">
                        <button 
                        className="bg-black bg-opacity-20 h-16 text-xl font-semibold text-gray-400 w-full font-1xl rounded-3xl shadow-smactive:bg-opacity-90">
                            Github
                        </button>
                        </a>
                </div>

            </>
    )
}

export default Sidebar;
