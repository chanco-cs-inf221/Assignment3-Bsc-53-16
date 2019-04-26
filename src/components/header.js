import React from 'react'
import States from './states'

export const Header = () => {
    
    return (
        <>
            <header>
                <h2 id="heading">
                    <span id="m">M</span>
                    <span id="a">A</span>
                    <span id="l">L</span>
                    <span id="a">A</span>
                    <span id="w">W</span>
                    <span id="i">I</span>
                    <span><i class="fas fa-arrow-alt-down"></i>Vacancies</span><i class="fas fa-arrow-alt-down"></i>   
                </h2>
                <States />
                <nav>
                    <ul>
                        <li><a href="About.html">About</a></li>
                        <li><a href="project.html"><span id="home">Home</span></a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}