import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BillPage from './components/BillPage'
//import Home from './components/Home'
import ViewBills from './components/ViewBills';
import ViewSingleBill from './components/ViewSingleBill';

function App() {

  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<BillPage />} />
        <Route path='/view' element={<ViewBills />}/>
        <Route path='/view/:id' element={<ViewSingleBill />}/>
      </Routes>
    </Router>
  )
}

export default App
