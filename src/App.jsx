import './App.css'
// import ToastContainer from './component/ToastContainer'
// import useStore from "./store"
import useToast from './component/useToast'

function App() {

  // const addToast = useStore((state) => state.addToast)
  // const removeToastx = useStore((state) => state.removeToast)

  const { toast, Xyz } = useToast()

  // debugger

  const toastHandler = (type) => {
    // switch (type) {
    //   case 'success':
    //     addToast({type, title: type})
    //     setTimeout(() => removeToastx(type), 1000)
    //     break;
    //   case 'win':
    //     addToast({type, title: type})
    //     setTimeout(() => removeToastx(type), 1000)
    //     break;
    //   default:
    //     break;
    // }

    toast(type)
  }

  return (
    <div className="App">
      <div>
        <Xyz />
        {/* <ToastContainer position="right-top" /> */}
        <button onClick={() => toastHandler("success")}>Success</button>
        <button onClick={() => toastHandler("win")}>Win</button>
      </div>
    </div>
  )
}

export default App
