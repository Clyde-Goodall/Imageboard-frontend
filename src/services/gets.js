export function getThreads(abbrev) {
    return fetch('http://localhost:8000/api/threads/' + abbrev)
    .then(response => response.json())
}

export function getBoards() {
    return fetch('http://localhost:8000/api/board/')
    .then(response => response.json())
}

export function getThreadReplies(id) {
    return fetch('http://localhost:8000/api/replies/' + id)
    .then(response => response.json())
}

export function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].toString().replace(/^([\s]*)|([\s]*)$/g, "");
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}