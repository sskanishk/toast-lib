import useStore from "../store"

function ToastContainer({}) {

    const toastList = useStore((state) => state.toastList)

    // debugger
    
    return (
        <div className="toast__container">
            {
                toastList.map((toast, _id) => {
                    return <ToastWrapper list={toast.list} position={toast.position} key={_id} />
                })
            }
        </div>
    )
}

function ToastWrapper({list, position}) {

    return (
        <div className={`toast__wrapper ${position}`}>
            {
                list.map((toast) => {
                    return <Toast toast={toast} position={position}  key={toast.id}/>
                })
            }
        </div>
    )
}


function Toast({toast, position}) {

    const removeToastx = useStore((state) => state.removeToast)
    
    return (
        <div className={`toast__box ${toast.type}`}>
            <p>{toast.title}</p>
            <button className="close_btn" onClick={() => removeToastx(position, toast.id)}>x</button>
        </div>
    )
}

export default ToastContainer