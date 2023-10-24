import Img from '../../assets/student.png'
import ehz from '../../assets/Ehizua.png'
const  SchoolStudentLogin = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row h-screen">
             <div className="w-[100%] lg:w-5/12 h-[30%] flex lg:flex-col lg:h-[100vh] bg-white items-center">
            <div className=' flex flex-col mt-[-80px] ml-[135px] lg:m-0 justify-around lg:flex-row items-center  w-[300px] h-[20%]'>
                <img src={ehz} alt="" />
            </div>
            <div className=" flex justify-center  w-[100%] h-[80%] bg-white rounded-full lg:rounded-none">
                <img className="fixed left-[40%] top-[21%] w-[100px] h-[100px] lg:relative lg:left-0 lg:top-8 lg:w-[584px] lg:h-[450px] " src={Img} alt="" />
            </div>
        </div>
        <div className="h-[70%]  w-[100%] lg:w-7/12 lg:h-[100vh] bg-[#134574] flex flex-col pt-[150px] lg:pt-[60px]">
 
           <div className="relative top-[60px] right-[45%]  lg:relative lg:top-0 lg:right-0 h-[10%] text-[#134574] flex font-bold lg:text-white text-center justify-center align-middle items-center text-[15px] lg:text-[34px]">
             LOGIN
           </div>
           
           <div className="h-[60%] flex text-white text-xl  justify-around items-center">
             <form className="flex flex-col justify-center items-center h-[100%] w-[70%] gap-8">


             <div className="flex flex-col  text-white w-[100%]">
                <label htmlFor="">Select a school</label>
                <input
                    type="text"
                    className=" bg-white  px-6 py-3 rounded-lg text-black focus:outline-none focus:border-indigo-300"
                    id="dropdown-input"
                    placeholder="Select an option"
                />
                <ul className="dropdown-options absolute hidden mt-2 w-48 py-2 bg-white border border-gray-300 rounded-lg z-10">
                    <li data-value="option1" className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Option 1</li>
                    <li data-value="option2" className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Option 2</li>
                    <li data-value="option3" className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Option 3</li>
                </ul>
             </div>
        
                <div className="flex flex-col w-[100%]">
                     <label htmlFor="username">Username</label> 
                     <input className="rounded-lg py-3 flex items-center text-black px-6"  type="text"/>
                 </div>
                 <div className="flex flex-col w-[100%]">
                     <label htmlFor="password">User ID</label> 
                     <input  className="rounded-lg py-3 flex items-center text-black px-6" type="password" placeholder="***********************"/>
                 </div>
                 <div className="flex justify-center items-center">
                   <button className="text-[#134574] bg-white rounded-3xl py-[20px] px-[60px] font-bold">LOGIN</button>
                 </div>
             </form>
           </div>
         
           
        </div>
     </section>
    )
  }
  
  export default SchoolStudentLogin;
  