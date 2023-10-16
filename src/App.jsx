import {Routes,Route} from 'react-router-dom'
import StudentLogin from './pages/StudentLogin'
import AdminLogin from './pages/AdminLogin'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/studentlogin' element={<StudentLogin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
      </Routes>
    </div>
  )
}

export default App
