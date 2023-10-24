import Img from '../../assets/tutor.png'
import ehz from '../../assets/Ehizua.png'

const TutorLogin = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row h-screen">
       <div className="w-[100%] lg:w-5/12 h-[30%] flex lg:flex-col lg:h-[100vh] bg-white items-center">
            <div className=' flex flex-col lg:flex-row items-center w-[300px] h-[20%] lg:ml-0 ml-[35%]'>
                <img src={ehz} alt="" />
            </div>
            <div className=" flex justify-center  w-[100%] h-[80%] bg-white rounded-full lg:rounded-none">
                <img className="fixed left-[40%] top-[20%] w-[100px] h-[100px] lg:relative lg:left-0 lg:top-8 lg:w-[584px] lg:h-[450px] " src={Img} alt="" />
            </div>
        </div>
       <div className="h-[70%] w-[100%] lg:w-7/12 lg:h-[100vh] bg-[#134574] flex flex-col pt-[30px] lg:pt-0">

          <div className="h-[20%] flex font-bold text-white text-center justify-center align-middle items-center text-[20px] lg:text-[34px]">
            TUTOR LOGIN
          </div>
          
          <div className="h-[60%] flex text-white text-xl  justify-around items-center">
            <form className="flex flex-col justify-center items-center h-[100%] w-[70%] gap-8">
                <div className="flex flex-col w-[100%]">
                    <label htmlFor="username">Username</label> 
                    <input className="rounded-lg py-3 flex items-center text-black px-6"  type="text" placeholder="emmanuel@ehizuahub.com"/>
                </div>
                <div className="flex flex-col w-[100%]">
                    <label htmlFor="password">Password</label> 
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

export default TutorLogin
