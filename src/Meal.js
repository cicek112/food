import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Meal(props) {
  let url = "https://www.themealdb.com/api/json/v1/1/lookup.php?i="
  const [int,setInt]=useState('')
  const [link,setLink]=useState('')
  const [show ,setShow]=useState(false)

  const Recep= async()=>{
    try {
      const response = await fetch(url+props.id);
      let result = await response.json();
      console.log(result)
      setInt(result.meals[0].strInstructions)
      setLink(result.meals[0].strYoutube)
      console.log(link)
      console.log(int)
      setShow(true)

    } catch (error) {
      console.error(error);
    }
    
  }

  return (
    <div>
          <div className="w-72 rounded bg-white shadow-2xl mt-5 flex flex-col items-center ">
            <img alt='none' className='rounded' src={props.img}></img>
            <h4 className='text-center mt-4 font-poppins text-2xl font-bold'>{props.title}</h4>
            <button onClick={Recep} className='pt-2 pb-2 pl-8 pr-8 color-black rounded-2xl mt-4 mb-4 bg-primary text-xl text-white  font-normal '>Recipe</button>
          </div>

          <div className={`flex-col text-clip overflow-hidden p-4 items-center h-128 bg-white shadow-2xl fixed top-32 rounded-2xl right-96 left-96 justify-between pt-4 pb-4 ${show?'flex':'hidden'}`}  >
            <CloseIcon onClick={()=>{setShow(false)}}></CloseIcon>
            <h3 className='font-poppins text-primary text-xl font-semibold mt-2 mb-2' >{props.title}</h3>
            <h2 className='font-poppins text-xl font-bold mb-2 '>Instructions</h2>
            <div className=' text-ellipsis overflow-hidden mt-2 mb-2 h-40'><p className='font-poppins' >{int}</p></div>
            
            <img alt='sa' className=' mb-4 w-32 h-auto rounded-full' src={props.img}></img>
            <button  className=" pt-2 pb-2 pl-8 pr-8 color-black rounded-2xl text-white bg-primary text-lg font-medium"><a className='p-4 font-poppins cursor-pointer' href={link}>Youtube</a></button>
          </div>
      </div>

  )
}

export default Meal