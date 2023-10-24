import {Routes,Route} from 'react-router-dom'
import StudentLogin from './pages/StudentLogin'
import AdminLogin from './pages/AdminLogin'
import TutorLogin from './pages/TutorLogin'
import SchoolStudentLogin from './pages/SchoolStudentLogin'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/studentlogin' element={<StudentLogin/>}/>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path='/tutorlogin' element={<TutorLogin/>}/>
        <Route path='/schoolstudentlogin' element={<SchoolStudentLogin/>}/>
      </Routes>
    </div>
  )
}

export default App
