import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css'

function Card({ src, title, description, price }) {
    const navigate = useNavigate();
    return (
        <>
         <div className='card'>
            <img src={src} alt="" />
            <div className="card__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            <Button onClick={()=>navigate("/search")} variant="outlined">Click me to Book</Button>
            </div>
        </div>
        </>
       
    )
}

export default Card