import { useState } from "react"
import SuggestionList from "./SuggestionList";

export default function InputSection({countries}) {
    
    const [inputValue, setInputValue] = useState("")
    const [isSuggested, setIsSuggested] = useState(false);


    const inputHandler = (e)=>{
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }

    console.log(inputValue)
    const  filterCountries = (param, arr, strict = false) => {
        if (strict) {
            return arr.filter(e=>e.startsWith(param));
        } else {
            return arr.filter(e=>e.includes(param));
        }
    }

    const choiseHandler = (nameOfCountry) => {
        console.log(nameOfCountry);
        setInputValue(nameOfCountry)
    }

    return (
    <div>
        <h2>Find Your country</h2>
        {/* Option 1<input id="option1" type="radio" name="option" ></input>
        <br></br>
        Option 2<input id="option1" type="radio" name="option" ></input> */}
        <input id="input" type="text" placeholder="type..." onChange={(e)=>{
            inputHandler(e)
        } } ></input>
        { !inputValue.length == 0 && <SuggestionList onChose={choiseHandler} listToRender={filterCountries(inputValue, countries)}  />}
        <h4>{inputValue}</h4>
    </div>
  )
}





// migrate this project to CRA
// implement 2 way binding
// make suggestion dissapead when country is ckicked
// optional implement 2 ways of filtering (include or startsWith)

