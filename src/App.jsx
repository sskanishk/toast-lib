import './App.css'
import useToast from './ToastLib/useToast'

function App() {

  const { toast, ToastBox } = useToast()

  const toastSuccess = (position) => {
    toast({
      type: "success",
      title: "Some text ....",
      position: position,
    })
  }

  const toastHandler2 = () => {
    toast({
      type: "error",
      title: "Some text ....",
      position: "right-bottom",
    })
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => toastSuccess("right-top")}>Success Right Top</button>
        <button onClick={() => toastSuccess("right-bottom")}>Success Right Bottom</button>
        <button onClick={() => toastSuccess("left-top")}>Success Left Top</button>
        <button onClick={() => toastSuccess("left-bottom")}>Success Left Bottom</button>
        <button onClick={() => toastHandler2()}>Error</button>
      </div>
      <ToastBox />
    </div>
  )
}

export default App
