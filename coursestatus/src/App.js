import React, { useEffect } from 'react'
import './App.css'  
import { MdDeveloperBoard } from "react-icons/md"; 
import { SiCssdesignawards } from "react-icons/si"; 
import { SiThealgorithms } from "react-icons/si";
import { useState } from 'react'
const App = () => {  
  let[state,setstate]=useState([])
 let[she,setshe]=useState(true)
  useEffect(()=>{
    let array=[
  { 
    course:"BasicAlgorithm",
    startdate:"27 Jan,2023",
    compleated:{
      value:10,
      percentage:48
    },
    duration:"14h 38m 56s"

 },
 { 
  course:"Webdevelopment",
  startdate:"29 Jan,2023",
  compleated:{
    value:0,
    percentage:0
  },
  duration:"10h 38m 56s"

},
{ 
  course:"UI/UX Designer",
  startdate:"29 Jan,2023",
  compleated:{
    value:10,
    percentage:82
  },
  duration:"11h 38m 56s"

},
] 
setstate(array)
  }) 
  let cases=(e)=>{  
   setshe(!she)


  }
  return (
    <div className='seter'>  
    <div className='container'>   
    <header>  
     <h2>Menu</h2> 
     <p style={{
      color:"blue"
     }} 
     onClick={(e)=>cases(e)}>{she===true?"hide":"showall"}</p>
    </header> 
    <main>  
    <p>courseName</p>
    <p>StartDate</p> 
    <p>LessonCompleted</p> 
    <p>Duration</p>
    </main> 
    <footer>  
    {  
     she===true &&  state.map((val,index)=>(
        <div key={val.course} className='contains'>  
        <div  className="decide" style={{
          display:'flex',
         
        }}>   
        <div className='fons' style={{
          display:"flex",
          
          marginLeft:"10px", 
          minHeight:"40px",
          minWidth:"40px",
          
          justifyContent:"center",
          alignItems:"center", 
          borderRadius:"10px",
          backgroundColor:index === 0 ? "purple" : (index === 1 ? "blue" : "green")

        
        }}> 
        {index===0 &&
        <MdDeveloperBoard style={{
          fontSize:"10px",
          color:"white"
        }}/> 
      }  
      {
        index===1 && 
        <SiCssdesignawards 
        style={{
          fontSize:"10px",
          color:"white"
        }}/>
      }
      {
        index===2 &&
        <SiCssdesignawards style={{
          fontSize:"10px",
          color:"white"
        }}/>
      }
        </div>
        <p className='disk'>{val.course}</p>  
        
        
        </div> 
         
        <p>{val.startdate}</p> 
        <div style={{
          display:"flex"
        }}>  
        <p>{val.compleated.value}/25 </p> 
        <p>({val.compleated.percentage}%)</p>
        </div> 
        <p>{val.duration}</p>
        </div>
      ))

    } 
    </footer>


    </div> 
    </div>
  )
}

export default App