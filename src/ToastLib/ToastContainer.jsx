import useStore from "../store"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faXmark, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

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
            <div className="toast__info">
                {
                    toast.type === 'success'
                    ? <FontAwesomeIcon icon={faCircleCheck} size={'1x'} onClick={() => removeToastx(position, toast.id)} />
                    : toast.type === 'error'
                        ? <FontAwesomeIcon icon={faExclamationCircle} size={'1x'} onClick={() => removeToastx(position, toast.id)} />
                        : null
                }
                <p>{toast.title} </p>
            </div>

            <FontAwesomeIcon className="close_btn" icon={faXmark} size={'1x'} onClick={() => removeToastx(position, toast.id)} />
        </div>
    )
}

export default ToastContainer