
export const ThreadModal = ({handleClose, show, children}) => {
    const showHideClassName = show ? "modal block" : "modal hidden"

    return (
        <div className={showHideClassName}>
            <div className="modal-container w-1/4 h-1/4 bg-white rounded-3xl shadow-lg">
                hello :)
            </div>
            <a href="javascript:;" className="modal-close" onClick={handleClose}>Close</a>
        </div>
    )
}

// export  function createReply() {
//     return 0;
// }