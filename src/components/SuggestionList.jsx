

export default function SuggestionList({listToRender, onChose}) {




  return (
    <ul className="suggestions">
        { listToRender.map(el=> <li onClick={()=>{onChose(el)}} key={el}>{el}</li>) }
    </ul>
  )
}

[1,2,3].map( (el) => el)