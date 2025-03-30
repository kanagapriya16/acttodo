
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Actdomain from './Actdomain'

const basename = import.meta.env.MODE === "production" ? "/acttodo" : "/";

function App() {


  return (
    <>
     <BrowserRouter  basename={basename}>
     <Routes>
      <Route path="/" element={<Actdomain/>}/>
     </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App
