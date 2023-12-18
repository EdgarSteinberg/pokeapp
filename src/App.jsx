import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from "./components/navBar/navBar"
import NotFound from "./components/notFound/notFound"
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Contacto from './components/contacto/contacto';


function App() {

  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer hola="hola mundo!" />} />
        <Route path='/type/:id' element={<ItemListContainer />}/>
        <Route path='/pokemon/:id' element={<ItemListContainer />}/>
        <Route path='/characteristic/:id' element={<ItemDetailContainer />}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
