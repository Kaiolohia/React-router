//Custom color
import { useParams, Link } from "react-router-dom"


const Color = ({ colors }) => {
    const { color } = useParams()
    console.log(color)
    console.log(colors)
    const currentColor = colors.find(c => c.color === color)
    console.log(currentColor)
    const pageStyle = {
        backgroundColor: currentColor.code
    }
    return (
        <div style={pageStyle}>
            <h1>This is {currentColor.color}</h1>
            <h2>Isn't it beautiful?</h2>
            <Link to="/Color">Go home</Link>
        </div>
    )
}

export default Color