import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import PersonalDetails from './Pages/PersonalDetails'
import ContactMe from './Pages/ContactMe'
import Footer from './components/Footer'
import{ BrowserRouter ,Routes ,Route} from 'react-router-dom'
import ProjectDetails from './Pages/ProjectDetails'

const App = () => {
  return (
   <BrowserRouter>
<Navbar/>

<Routes>
  <Route path ='/' element ={<Home />}></Route>

  <Route path='/projects' element ={<Projects />}></Route>
  <Route path='/projects/:projectID' element ={<ProjectDetails/>}></Route>

 
  <Route path='/personal_info' element={<PersonalDetails />}></Route>

  <Route path ='/contact_me' element={<ContactMe />} ></Route>

  </Routes>
  
  <Footer/>
 </BrowserRouter>
    
  )
}

export default App


