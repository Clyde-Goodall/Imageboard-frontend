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