import useStore from "../store"

function ToastContainer({ position }) {

    const toastList = useStore((state) => state.toastList)
    const removeToastx = useStore((state) => state.removeToast)

    return (
        <div className={`toast__container ${position}`}>
            {
                toastList.map((toast) => {
                    return <Toast type={toast.type} title={toast.title} removeToastx={removeToastx}/>
                })
            }
        </div>
    )
}


function Toast({type, title, removeToastx}) {
    return (
        <div className={`toast__wrapper ${type || "deafult"}`}>
            <p>{title}</p>
            <button className="close_btn" onClick={() => removeToastx(type)}>x</button>
        </div>
    )
}

export default ToastContainer