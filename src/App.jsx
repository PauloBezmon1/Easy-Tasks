import Rotas from "./routes/Rotas"
import './App.css'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='subpixel-antialiased dark:bg-slate-900'>
      <ToastContainer autoClose={2000} />
      <Rotas />
    </div>
  )
}

export default App;
