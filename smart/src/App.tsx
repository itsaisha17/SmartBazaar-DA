import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from './Home/home'
import { Add } from './Cart/add'
import { Add_cloth } from './Cart/add_cloth'
import { CartPage } from './Cart/cart'
import { Form } from './Regis/form'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
        <Route path='/Add_cloth' element={<Add_cloth/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
        <Route path='/Reg' element={<Form/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
