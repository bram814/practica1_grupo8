import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { HOME, PAROIMPAR, fibo, ALREVEZ, POTENCIA, RAIZ } from '../Config/env';

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
                                <li className="nav-item">
                                <Link className="nav-link active" to={ALREVEZ}>Problema 3</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" to={POTENCIA}>Problema 4</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" to={RAIZ}>Problema 4_2</Link>
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