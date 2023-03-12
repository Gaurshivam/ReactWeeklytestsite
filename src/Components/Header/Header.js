import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand pt-4 px-5 mb-3" href="Header.js">
                        <h3>Flex Business Pro</h3>
                        <p className='Pref'>Clean and Modren Business Theme</p>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 pt-3">
                            <li class="nav-item">
                                <a class="nav-link aRef active" aria-current="page" href="www.google.com">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="www.google.com">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="www.google.com">Styleguide</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="www.google.com">blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link " href="www.google.com">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header