import { JellyTriangle } from 'ldrs/react'
import 'ldrs/react/JellyTriangle.css'
// import { Audio, Oval, TailSpin, ThreeDots } from 'react-loader-spinner'
export default function SideNav(){
    return(
    <>
    {/* <ThreeDots
  height="80"
  width="80"
  radius="9"
  color="#4fa94d"
  ariaLabel="three-dots-loading"
  wrapperStyle={{ margin: '20px' }}
  wrapperClass="custom-loader"
  visible={true}
/> */}
{/* <TailSpin
        height="200"
        width="120"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        visible={true}
      /> */}
      {/* <Oval
  height={80}
  width={80}
  color="#4fa94d"
  visible={true}
  ariaLabel="oval-loading"
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}
/> */}
 {/* <Audio
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    /> */}
    <JellyTriangle size={40}/> 
        <div className="flex gap-3 flex-col">
            <a href="/home">Home</a><a href="/about">About</a><a href="education">Education</a><a href="projects">Projects</a><a href="/others">Others</a>
        </div>


    </>)
}

