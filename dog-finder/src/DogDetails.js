import { useParams } from "react-router-dom"
import Nav from "./Nav"

const DogDetails = (props) => {
    const { name } = useParams()
    let curDog = props.dogs.find(d => d.name === name)
    let renderDog = (
        <>
            <img src={curDog.src} alt={name}/>
            <h2>{name}</h2>
            <h3>{curDog.age} Year(s) old</h3>
            <ul>
                {curDog.facts.map((f,i) => <li key={i}>{f}</li>)}
            </ul>
        </>
    )

    return (
        <div>
            <Nav dogs={props}/>
            {renderDog}
        </div>
    )
}

export default DogDetails