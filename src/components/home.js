import React from 'react';
import { Link } from 'react-router-dom';
import {useState, useEffect} from "react";
import {getBoards} from "../services/gets";

export default function Home()  {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      let mounted = true;
      getBoards()
        .then(response => {
          setData(response);
          if(mounted) {
            setData(response);
          }
          setIsLoaded(true);
        });
      
        return () => mounted = false;
      
    }, [setData])

    console.log(data);
    return (
        
        <>
            <div className="flex border-box p-10 h-72 w-auto 
            bg-indigo-600 text-white justify-start items-center shadow-lg rounded-3xl m-5 ">
                <div className="box-border px-20">
                    <h1 className="font-bold text-7xl box-border pb-4 mt-0 htitle">Badabing Badaboom</h1>
                    <h3 className=" htitle-desc">Boards go here :)</h3>
                </div>
            </div>
            
            <div className="flex h-auto w-auto bg-gray-100 
            text-black justify-start items-center shadow-sm rounded-3xl mx-5 ">
               

                    <div className="board-select">
                    {isLoaded ? data.map(boards => (
                        
                            <button
                            className=" my-5 w-full bg-indigo-500 outline-none
                            rounded-md px-6 py-4
                            active:bg-indigo-600 active:inner-shadow h-auto text-white text-2xl font-semibold">
                               <Link to={`${boards.abbrev}`} key={boards.id} className="w-auto">
                                    /{boards.abbrev}/ 
                                    </Link>
                            </button>
                        
                        // if can't reach the server:
                    )) : <><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                    <p className="">Server is currently unreachable.</p></>}
                    </div>
      
              
            </div>
            
        </>
    )
    
}
