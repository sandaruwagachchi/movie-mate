import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//import Admin from "./Admin/Admin.jsx"
//import Add from "./Add/Add.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
   {/*<Admin/>*/}
   {/* <Add/>*/}
  </StrictMode>,
)
