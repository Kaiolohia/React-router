import Nav from "./Nav"

const DogList = (props) => {
    return (
        <div>
            <Nav dogs={props}/>
            {props.dogs.map((d) => 
                <div>
                    <img src={d.src} alt={d.name} width="200" height="200"/>
                    <h3>{d.name}</h3>
                    <h4>{d.age} Year(s) Old</h4>
                    <ul>{d.facts.map((f, i) => 
                        <li key={`${i}${d.name}`}>{f}</li>
                    )}
                    </ul>
                    <hr/>
                </div>
            )}
        </div>
    )
}

export default DogList