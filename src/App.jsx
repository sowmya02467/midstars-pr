
import './App.css'
import { Navbar,Container } from 'react-bootstrap'
 import { Routes ,Route} from 'react-router-dom'
import icon from './assets/icon1.png'
import Hops from './Components/Hops'
import HospD from './Components/HospD'
function App() {
 

  return (


    // here i am using the frame work  from react-bootstrap



    <div  >
       < Navbar bg="light" variant="light" style={{borderBottom:'2px solid black'  ,width:"75rem",display:'flex',justifyContent:'start',alignItems:'center'}}>
       
          <Navbar.Brand href="#home" style={{display:'flex',alignItems:'center'}}>
            <img style={{height:'3rem', width:'3rem',}}
              alt=""
              src={icon}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            <div style={{alignItems:'center' , fontSize:"2rem"}}>   MedStart</div>
        
          </Navbar.Brand>
         </Navbar>


 {/* here i am using the react routes to navigate easy of the functionality of my project 
 when i use react route from (react -router -dom) 1=> install react router dom  in cd from react dom document 2=> import thr react router dom as {routes. route} 3=> assign the react-router -dom in main .jsx as (browse react router as router)
  */}



 <Routes>
  <Route  path='/' element={<Hops />} />
  <Route path='/detail/properties/:name' element={< HospD/>} />
 </Routes>
    </div>
  )
}



export default App
