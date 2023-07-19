import Meal from "./Meal";
import { useState } from 'react';

function App() {
  const [text, setText] = useState("");
  const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/filter.php?i=")
  const [yemek,setYemek]=useState([])
  

  const handleChange = (event) => {
    setYemek([])
    setText(event.target.value)
    setUrl("https://www.themealdb.com/api/json/v1/1/filter.php?i="+event.target.value)
  }

  const Fire= async()=>{
    try {
      const response = await fetch(url);
      let result = await response.json();
      result=result.meals;

      for(let i=0 ; i<Object.keys(result).length ;i++){
        setYemek(current=>[...current , result[i]])
        
      }
      
    } catch (error) {
      console.error(error);
    }
    setUrl("")
    setText("")
  }
  

  

  return (
    <div>

      <div className=" font-poppins text-center  ">
        <div className="bg-[url('meal.png')] pt-12 pb-48  bg-cover bg-center ">
          <div>
            <h1 className=" font-poppins text-4xl mb-4 font-bold text-gray-100" >Find Meals For Your Ingredient</h1>
            <h4 className=" font-poppins text-lg mt-8 text-gray-200 ">Real food doesnt have ingredients, the real food is the ingredient.</h4>
            <h4 className="font-poppins text-lg text-gray-200">-Picasso</h4>
          </div>
          <div className=" flex border-solid border-2 mt-16 pt-2 pb-2 pr-5 pl-5 w-2/5 mr-auto ml-auto rounded-3xl justify-between border-slate-200 mt-5">
            <input type="text" value={text} className="w-full text-white opacity-80 bg-transparent border-none outline-none " placeholder="enter you last food..." onChange={handleChange}></input>
            <button onClick={Fire} className="pt-2 pb-2 pl-4 pr-4 color-black rounded-2xl text-white bg-primary text-lg font-medium">Search</button>
          </div>
        </div>
       

        <h2 className="font-poppins text-3xl mt-20  font-bold">Your Search Results:</h2>

      </div>

      <div className="flex flex-wrap justify-between w-3/4 ml-auto mr-auto mb-20">
      {yemek.map((item)=>{
        return <Meal key={item.idMeal} img={item.strMealThumb} id={item.idMeal} title={item.strMeal}></Meal>
      })}
      </div>
      

    </div>

  );
}

export default App;
