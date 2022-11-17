import './App.css'
// import ToastContainer from './component/ToastContainer'
// import useStore from "./store"
import useToast from './component/useToast'

function App() {

  // const addToast = useStore((state) => state.addToast)
  // const removeToastx = useStore((state) => state.removeToast)

  const { toast, ToastBox } = useToast()

  // debugger

  const toastHandler = (type) => {
    toast(type)
  }

  return (
    <div className="App">
      <div>
        <ToastBox />
        <button onClick={() => toastHandler("success")}>Success</button>
        <button onClick={() => toastHandler("win")}>Win</button>
      </div>
    </div>
  )
}

export default App
