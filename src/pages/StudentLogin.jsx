import { Link } from "react-router-dom"
import Image from "../../assets/Ehizua.png"
import person from "../../assets/person1.png"
import '../../styles/studentlogin.css'


const StudentLogin = () => {
  return (
   <section className=''>
    <nav className='flex items-center h-[108px] w-full justify-center lg:justify-between bg-white border-b lg:px-[200px]'>
      <div className=" flex items-center w-[200px] h-[30px]"><img src={Image} className="w-[130px] lg:w-[200px]" alt="ehizua"/></div>
      <div className="flex items-center gap-2 lg:gap-5">
        <Link className="rounded-2xl px-2 py-3 lg:px-6 lg:py-3 bg-sky-700 text-white text-[7px] lg:text-[20px]" to="/">Back Home</Link>
        <Link className="rounded-2xl px-2  py-3 lg:px-6 lg:py-3 bg-sky-700 text-white text-[7px] lg:text-[20px]" to="/adminlogin">Staff Login</Link>
      </div>
    </nav>
      
      <section className="flex justify-center items-center">
        <div className="w-[300px] h-screen lg:w-[900px] mt-11">
          <div className="flex justify-center flex-col items-center">
            <h1 className="font-extrabold lg:text-[48px]">Good Evening,  Student</h1>


             <div className="flex flex-col relative items-center space-y-[70px]">
               <div className="absolute border z-20 rounded-full shadow-slate-700"><img src={person} className="rounded-full w-[100px] h-[100px] lg:h-[128px] lg:w-[128px]"/></div>
                  
               <div className="relative w-[300px] z-10 h-[400px] sm:w-[600px]  lg:w-[800px] lg:h-[400px] bg-[#134574] rounded-[19px] flex items-center justify-center">
                 <form className=" flex flex-col justify-center gap-4">

                   <div className="flex items-center  gap-9 lg:gap-11">
                     <label htmlFor="" className="text-[10px] lg:text-[20px] text-white">Email</label>
                     <input type="text" className="py-4 px-4 rounded-[10px] w-[190px]  sm:w-[230px] lg:w-[350px]"/>
                   </div>

                   <div className="flex items-center gap-4 lg:gap-2">
                     <label htmlFor="" className="text-[10px] lg:text-[20px] text-white">Password</label>
                     <input type="password" className="py-4 px-3 rounded-[10px] w-[190px] sm:w-[230px] lg:w-[350px]" />
                   </div>

                 </form>
               </div>
             </div>



          </div>
          
        </div>

      </section> 

      <div>
        <div className="mt-[10px] sm:mt-[120px] absolute top-0 left-0 sm:top-[100px] w-[50px] h-[50px]  sm:w-[300px] lg:h-[370px] bg-[#0D2D4A47] blur-[150px]"></div>
        <div className="mt-[80px] sm:mt-[150px] absolute top-[10px] right-[-20px] z-0 sm:top-[90px] w-[50px] h-[50px]  sm:w-[250px] lg:h-[250px] bg-pink-400 blur-[150px] rounded-[370px]"></div>
        <div className="mt-[80px] sm:mt-[150px] absolute bottom-0 left-0 sm:bottom-[-100px] w-[50px] h-[50px]  sm:w-[250px] lg:h-[250px] bg-pink-400 blur-[150px] rounded-[370px]"></div>
        <div className="mt-[80px] sm:mt-[150px] absolute bottom-[10px] right-0 sm:bottom-0 w-[50px] h-[50px] z-0 sm:w-[250px] lg:h-[250px] bg-orange-400 blur-[150px] rounded-[370px]"></div>
      </div>



   </section>
  )
}

export default StudentLogin;
