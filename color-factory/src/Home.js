import { Link } from "react-router-dom"

const Home = ({colors}) => {
    return (
        <div>
            <div>
                <Link to="/color/new">Add a new color?</Link>
            </div>
            <div>
                <ul>
                    {colors.map(c => (
                        <li key={c.code}><Link to={`/color/${c.color}`}>{c.color}</Link></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home