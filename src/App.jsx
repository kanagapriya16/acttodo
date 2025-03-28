
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Actdomain from './Actdomain'



function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Actdomain/>}/>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
