import React from "react";
import {useParams, Link} from "react-router-dom";
import {useState, useEffect} from 'react';
import { getThreadReplies } from '../services/gets';

function Thread() {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const {abbrev, id} = useParams();
   
  
    useEffect(() => {
      let mounted = true;
      getThreadReplies(id)
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
            <div className="subpixel-antialiased flex border-box p-10 h-72 w-auto bg-indigo-600 text-white 
            justify-start items-center shadow-lg rounded-3xl m-5 ">
                <div className="box-border px-20">
                    <h1 className="htitle">/{abbrev}/</h1>
                    <h2 className="font-regular text-3xl">All {abbrev}-related threads will appear here</h2>
                </div>
            </div>
            {/* Threads */}
            <div className="h-screen w-full h-full ">
                
                    <div className="mx-auto flex justify-center flex-col ">
                    {data.map(replies => (
                     
                          <figure className="w-auto max-h-auto min-h-0 rounded-2xl mx-5 mb-5 shadow-2xl bg-white">
                         
                                <div className="flex flex-rows bg-white rounded-2xl">
                                    {replies.img ?  
                                        <img className=" w-24 h-auto md:rounded-l-2xl thread-cover timg" src={replies.img} />
                                    : <div className="w-24 md:h-auto thread-cover "/>
                                    }
                                         
                                    <div className=" text-center md:text-left w-auto  ">
                                        <blockquote>

                                        <div className=" border-gray-200 h-auto ">
                                            <h5 className="text-gray-500 font-sans m-5 break-all break-words">{replies.content}dfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfgdfkasbdlkgahsjldgfkbsfdgihsfdigahsdvgjahsdfg</h5>
                                        </div>

                                        <div className="w-auto box-border h-full border-gray-200 ">
                                    
                                        </div>
                                        </blockquote>
                                        
                                    </div>
                                </div>               
                            
                        </figure>
                                      
                        ))}

                    <figure className=" w-auto h-auto rounded-2xl mx-5 shadow-2xl bg-white">
                         
                         <textarea className="transition duration-200 ease-in-out focus:outline-none focus:ring focus:border-3 focus:border-indigo-500 text-md w-full h-96 bg-white min-h-48 rounded-t-2xl post-text rounded-t-2xl border-0">
                            
                         </textarea>
                         <div 
                         className="w-full box-border h-20 bg-indigo-500 
                                    rounded-b-2xl items-center inline-flex space-x-12 justify-center">
                            
                            <label class="inline-flex items-center">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600 rounded-sm  border-0" />
                                <span class="ml-2 text-white text-lg font-semibold">ReCaptcha</span>
                            </label>   
                            <input type="file" 
                            className="bg-white w-48 text-lg font-semibold active:bg-gray-100 
                            text-indigo-500 shadow-md rounded-md h-1/2" name="op_img" accepts="image/png, image/jpg, image/jpeg, image/gif"/>
  
                            <button className="pbutton">POST</button>
                            
                    </div>
                         
                 </figure>
                    </div>
                </div>
            
        </>
    )
    
}

export default Thread