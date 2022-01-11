import { Link } from "react-router-dom"

const Nav = (props) => {
    const navStyle = {
        backgroundColor : "black",
        overflow : "hidden",
    }
    const linkStyle = {
        float : "left",
        color : "white",
        textAlign : "center",
        padding : "14px 16px",
        TextDecoration : "none",
        fontSize : "17 px"
    }
    return (
        <div style={navStyle}>
            <Link to="/dogs" key="home" style={linkStyle}>Home</Link>
            {props.dogs.dogs.map((d, i) => 
                <Link to={`/dogs/${d.name}`} key={i} style={linkStyle}>{d.name}</Link>
            )}
        </div>
    )
}

export default Nav