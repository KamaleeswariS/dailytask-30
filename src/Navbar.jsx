import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {
    let navigate = useNavigate()

        return (<>
            <nav className="navbar fixed-top">
            <a class="navbar-brand container-fluid text-uppercase" id="Navbar-Title"><h1>Address book</h1></a>
                <div className="container-fluid">
                        <form className="container-fluid justify-content-end" id='navbar-form'>
                            <button className="btn btn-lg btn-success me-4" type="button" onClick={()=> {navigate('/create')}}> <h2>+ Create</h2></button>
                            <button className="btn btn-lg btn-primary" type="button" onClick={()=> {navigate('/card-details')}}> <h2> View</h2> </button>
                        </form>
                </div>
            </nav>
        </>
        )
}

export default Navbar