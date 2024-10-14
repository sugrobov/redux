import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {

    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <header className="bg-amber-400 p-5">
            <h1 className="text-2xl md:text-4xl">Firm</h1>
            <div className="no-underline hover:underline ml-5"><Link to={`/`}>Home</Link></div>
        </header>
    )
}

export default Header;