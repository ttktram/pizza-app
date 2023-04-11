import React from 'react'
import Pizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${Pizzas})` }}>

            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus veritatis eaque recusandae nihil porro cum dolores sunt tempora! Tenetur commodi eum sequi quas laudantium sunt autem at numquam sit, expedita maxime, fugit odio et praesentium dolorem vitae. Commodi consequuntur libero fugiat repudiandae laborum quo rem at cum optio modi.</p>
            </div>
        </div>
    )
}

export default About