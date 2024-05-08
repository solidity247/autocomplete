export default function InputSection({countries}) {
    console.log(countries)
  return (
    <div>
        <h2>Find Your country</h2>
        Option 1<input id="option1" type="radio" name="option" ></input>
        <br></br>
        Option 2<input id="option1" type="radio" name="option" ></input>
        <input id="input" type="text" placeholder="start typing..."></input>
        <ul className="suggestions">
            <li>Argentina</li>
            <li>Australia</li>
            <li>Brasil</li>
            
            <li>Brasil</li>
        </ul>
    </div>
  )
}

// we have a data in our component
// create state of value of input
// invent algithytm to filter
// 
//