import React,{useEffect} from 'react';

import { Link, useHistory } from 'react-router-dom';

const  Header = () =>{
    return (
            <center>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="container-fluid">
                        <li className="nav-item ">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" ><Link to="/PersonalDetails">Features</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/Registration">Registration</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" > <Link to="/Login">Login</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>  
        </center> 
    )
}
export default  Header;