import useStore from "../store"
import ToastContainer from "./ToastContainer"

function useToast() {

    const addToast = useStore((state) => state.addToast)
    const removeToastx = useStore((state) => state.removeToast)

    const toast = ({type, position, title, delay, autoClose=true}) => {
        let toastId = Math.random() * 100
        switch (type) {
            case 'success':
                addToast({ type, title, position, id: toastId })
                if(autoClose) setTimeout(() => removeToastx(position, toastId), delay || 4000)
                break;
            case 'error':
                addToast({ type, title, position, id: toastId})
                if(autoClose) setTimeout(() => removeToastx(position, toastId), delay || 4000)
                break;
            default:
                break;
        }
    }

    const ToastBox = () => {
        return (
            <>
                <ToastContainer />
            </>
        )
    }

    // debugger

    return { toast, ToastBox }

}

export default useToast