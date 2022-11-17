import './App.css'
import useToast from './ToastLib/useToast'
import codeSnipp from "../src/assets/carbon.svg"

function App() {

  const { toast, ToastBox } = useToast()

  const toastSuccess = (position) => {
    toast({
      type: "success",
      title: "Some text ....",
      position: position,
      delay: 1000
    })
  }

  const toastHandler2 = () => {
    toast({
      type: "error",
      title: "Some text. AutoClose:False",
      position: "right-bottom",
      autoClose: false
    })
  }

  return (
    <div className="App">
      <div>
        <button className='action__btn' onClick={() => toastSuccess("right-top")}>Success Right Top</button>
        <button className='action__btn' onClick={() => toastSuccess("right-bottom")}>Success Right Bottom</button>
        <button className='action__btn' onClick={() => toastSuccess("left-top")}>Success Left Top</button>
        <button className='action__btn' onClick={() => toastSuccess("left-bottom")}>Success Left Bottom</button>
        <button className='action__btn' onClick={() => toastHandler2()}>Error</button>
      </div>
      <ToastBox />

      <div>
        <img src={codeSnipp} />
      </div>
    </div>
  )
}

export default App
