import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">
                <button>Home</button>
            </NavLink>
            <NavLink to="/quotes">
                <button>Quotes API</button>
            </NavLink>
            <NavLink to="/breaking">
                <button>BreakingBad Quotes</button>
            </NavLink>
        </nav>
    )
}

export default Nav
