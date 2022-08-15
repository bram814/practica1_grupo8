import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { HOME, PAROIMPAR, fibo } from '../Config/env';

class Navbar extends Component{


    render(){
        return(
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                    <div className="container-fluid">
                
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                <Link className="nav-link active" to={HOME}>Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" to={PAROIMPAR}>Problema 1</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" to={fibo}>Problema 2</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </>
        );

    }

}

export default Navbar;