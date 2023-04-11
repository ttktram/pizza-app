import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Domino Pizza</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, distinctio?</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home