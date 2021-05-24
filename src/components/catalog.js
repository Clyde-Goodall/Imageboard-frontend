import React from "react";
import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { getThreads } from '../services/gets';

function Catalog() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {abbrev} = useParams();
   
  
    useEffect(() => {
      let mounted = true;
      getThreads(abbrev)
        .then(response => {
          setData(response);
          if(mounted) {
            setData(response);
          }
          setIsLoaded(true);
        });
        return () => mounted = false;
    }, [setData]);
    console.log(data);

    return (
        <>
        {/* boad title/desc(unimplemented) */}
            <div className=" flex border-box p-10 m-5 h-72 w-auto bg-indigo-600 text-white justify-start 
            items-center shadow-lg rounded-3xl ">
                <div className="box-border px-20">
                    <h1 className="font-bold text-7xl box-border pb-4 mt-0">/{abbrev}/</h1>
                    <h2 className="font-regular text-3xl">All {abbrev}-related threads will appear here</h2>
                </div>
            </div>
            {/* Replies */}
            <div className="h-screen w-full  box-border">
                
                    <div className="mx-auto flex flex-wrap w-full justify-center">
                    {data.map(threads => (
                     
                          <figure className=" w-96 h-auto rounded-2xl m-5 shadow-2xl" key={threads.id}>
                            <Link  to={`/${abbrev}/${threads.id}`}>
                                <div className="w-full h-auto flex flex-rows bg-white rounded-t-2xl z-2">
                                    <div className="w-1/2 h-auto md:w-64 md:h-auto md:rounded-tl-2xl  thread-cover border-r border-indigo-200" style={{ 
                                                backgroundImage: `url(${threads.img})` 
                                                }} />
                                                
                                    <div className=" text-center md:text-left relative w-1/2">
                                        <blockquote>
                                        <div className="w-auto box-border h-full border-gray-200 ">
                                            <h4 className="text-3xl font-regular w-4/5 m-5 box-border border-gray-200 border-b-3 align-middle ">
                                                {threads.content}
                                            </h4>
                                        </div>

                                        <div className="w-full border-gray-200 h-auto ">
                                            <h5 className="text-gray-500 font-sans m-5 break-words lim "> a a a a a a a a a a a a a a a a  aa a a  a desc will go in here yada yada yada yadayada yada yada yada yada yada yada yada yada desc will go in here yada yada yada yadayada yada yada yada yada yada yada yada yadaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</h5>
                                        </div>

                                        <div className="w-auto box-border h-full border-gray-200 ">
                                    
                                        </div>
                                        </blockquote>
                                        
                                    </div>
                                </div>
                                </Link>
                                <div 
                                className="w-full box-border h-1/5 bg-indigo-500 rounded-b-2xl flex items-center justify-center text-xs border-t border-indigo-600">
                                    <p className="mx-10 text-white inline-flex ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>   <span className="mx-2">{threads.reply_count}</span>
                                    </p>
                                    <p className="mx-10 text-white inline-flex ">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>    <span className="mx-2">{threads.img_count}</span>
                                    </p>

                                    <p className="mx-10 text-white inline-flex ">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>    <span className="mx-2">{threads.watch_count}</span>
                                    </p>                        

                                </div>
                        </figure>
                        
                      
                        ))}
                    </div>
                </div>
            
        </>
    )
    
}

export default Catalog