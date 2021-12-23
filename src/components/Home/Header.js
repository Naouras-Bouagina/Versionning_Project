import React, { Component } from 'react'

import { Link } from 'react-router-dom'



export class Header extends Component {
    render() {
        return (
            
            <><header>
                <div className="container-menu-desktop">

                    <div className="top-bar">
                        <div className="content-topbar flex-sb-m h-full container">
                            <div className="left-top-bar">
                                Free shipping for standard order over $100
                            </div>

                            <div className="right-top-bar flex-w h-full">


                                <Link to="/login" className="flex-c-m trans-04 p-lr-25">
                                   Login
                                </Link>

                                <Link to="/" className="flex-c-m trans-04 p-lr-25">
                                 Log Out
                              </Link>

                            </div>
                           


                             

                             
                        </div>
                    </div>

                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop container">


                            <a href="#" className="logo">
                                <img src="assets/images/icons/logo-01.png" alt="IMG-LOGO" />
                            </a>


                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>

                                        <Link to="/">Home</Link>

                                    </li>

                                    <li>
                                        <Link to="/products">Shop</Link>
                                    </li>

                                    <li>
                                        <Link to="/Shopcart">Shopping-Cart</Link>
                                    </li>

                                    <li>
                                        <Link to="/About">About</Link>
                                    </li>

                                    <li>
                                        <Link to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>


                            <div className="wrap-icon-header flex-w flex-r-m">
                              
                            <Link to="/Shopcart">
                                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-cart">
                                    
                                    <i className="zmdi zmdi-shopping-cart"></i>
                                   
                                </div>
                            </Link>
                               
                            </div>

                        </nav>
                    </div>
                </div>





               
            </header></>
            
           

        
        )
    }
}

export default Header
