import {getCookie} from "./gets";

export function postThread(data) {
    const csrftoken = getCookie('crsftoken');

    const form = new FormData();
    
    form.append('img', data.img);
    form.append('board', data.board);
    form.append('content', data.content);

    console.log(data.board + ',' + JSON.stringify(data.img) + ',' + data.content);
   
    return fetch('http://localhost:8000/api/thread/post', {
        method: 'POST',
        headers: {
            'X-CSRFToken': csrftoken,        
        },
        body: form
        
    }).then(response => response.json())
        .then(json => console.log(json));

 
}