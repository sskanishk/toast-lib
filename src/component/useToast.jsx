import useStore from "../store"
import ToastContainer from "./ToastContainer"

function useToast() {

    // const toastList = useStore((state) => state.toastList)
    const addToast = useStore((state) => state.addToast)
    const removeToastx = useStore((state) => state.removeToast)

    const toast = ({type, position, title}) => {
        switch (type) {
            case 'success':
                addToast({ type, title, position, id: Math.random() * 100 })
                // setTimeout(() => removeToastx(type), 2000)
                break;
            case 'win':
                addToast({ type, title, position, id: Math.random() * 100 })
                // setTimeout(() => removeToastx(type), 2000)
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