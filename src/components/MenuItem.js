import React, { useState } from 'react'
import { MenuList } from '../helpers/MenuList';
import { FormatCurrency } from '../helpers/FormatCurrency';

function MenuItem({ image, name, price, id }) {

    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <p>{FormatCurrency(price)}</p>
            
        </div>
    )
}

export default MenuItem