import React from 'react'
import { Link } from "react-router-dom"
export default function Navbar() {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Rental</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" to="/">Home</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
