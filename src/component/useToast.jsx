import useStore from "../store"
import ToastContainer from "./ToastContainer"

function useToast() {

    const toastList = useStore((state) => state.toastList)
    const addToast = useStore((state) => state.addToast)
    const removeToastx = useStore((state) => state.removeToast)

    const toast = (type) => {
        switch (type) {
            case 'success':
                addToast({ type, title: type })
                setTimeout(() => removeToastx(type), 1000)
                break;
            case 'win':
                addToast({ type, title: type })
                setTimeout(() => removeToastx(type), 1000)
                break;
            default:
                break;
        }
    }

    const Xyz = () => {
        return (
            <>
                <ToastContainer position="right-top"  />
            </>
        )
    }

    // debugger

    return { toast, Xyz }

}

export default useToast