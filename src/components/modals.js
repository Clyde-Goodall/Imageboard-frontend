import {postThread} from '../services/posts';
import {useParams} from 'react-router-dom';
import {useState} from "react";

export const ThreadModal = ({handleClose, show, children}) => {

    const showHideClassName = show ? "modal block" : "modal hidden";
    const {abbrev} = useParams();

    //post params
    const post = {
        content: '',
        img: '',
        board: abbrev,
    };

    function setThreadContent(e) {
        console.log("updated content")
        post.content = e.target.value;
    }

    function setThreadImg(e) {
        
        post.img = e.target.files[0];
        console.log(post.img);
    }
    
    function callPost () { postThread(post); }
    

    return (
        <div className={showHideClassName}>
            <div className=" absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
                    <div className=" group box-border text-gray-800 modal-container w-2/3 h-1/3 md:w-4/5 bg-white rounded-3xl shadow-lg z-50">
                         
                         <textarea onBlur={setThreadContent.bind(this)} className="transition duration-300 ease-in-out focus:outline-none 
                         focus:ring focus:border-3 focus:border-indigo-500 
                         text-md w-full h-96 bg-white min-h-48 rounded-t-2xl 
                         post-text rounded-t-2xl border-0" >
                            
                         </textarea>
                         {/* post control area */}
                         <div 
                         className="w-full box-border h-auto md:h-24 lg:h-24 bg-indigo-500 
                                    rounded-b-2xl items-center flex flex-wrap space-x-4 justify-center">
                            
                            <label class="inline-flex items-center ">
                                <input type="checkbox" class="form-checkbox h-5 w-5 text-indigo-600 rounded-sm border-0" />
                                <span class="ml-2 text-white text-lg font-semibold">ReCaptcha</span>
                            </label>   
                            
                            <input type="file" id="upload" onChange={setThreadImg}
                            className="hidden bg-white w-48 text-lg font-semibold active:bg-gray-100 
                            text-indigo-500 shadow-md rounded-md h-1/2" name="op_img" accepts="image/*"/>
                            
                            <label class="pbutton flex justify-center items-center" htmlFor="upload">Choose file</label>
                            
                            <button className="pbutton w-auto" onClick={callPost}>Post</button> 

                            <button className=" cbutton inline-flex justify-center items-center" onClick={handleClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg><span className="ml-2">Close</span></button>
                            
                    </div>
                         
   
                
               
                
                </div>
                
            </div>
        </div>
    )
}

// export  function createReply() {
//     return 0;
// }