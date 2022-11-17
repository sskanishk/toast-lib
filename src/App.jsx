import './App.css'
// import ToastContainer from './component/ToastContainer'
// import useStore from "./store"
import useToast from './component/useToast'

function App() {

  // const addToast = useStore((state) => state.addToast)
  // const removeToastx = useStore((state) => state.removeToast)

  const { toast, ToastBox } = useToast()

  // debugger

  const toastHandler = () => {
    toast({
      type: "success",
      title: "Some text ....",
      position: "right-top",
    })
  }

  const toastHandler2 = () => {
    toast({
      type: "win",
      title: "Some text ....",
      position: "right-bottom",
    })
  }

  return (
    <div className="App">
      <div>
        <ToastBox />
        <button onClick={() => toastHandler()}>Success</button>
        <button onClick={() => toastHandler2()}>Win</button>
      </div>
    </div>
  )
}

export default App
