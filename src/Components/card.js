import React from 'react';
import profile from './Portfolio_Hero_Image_sml.jpg';

export default function card (props) {

    return (
       
        <div className='card'>

            <div className='image-container'>
                <img src={ profile } className='profile-picture' alt="Profile Picture" />
            </div>

            <div className="card-header">
                <h1> { props.name } </h1>
            </div>

            <div className="card-title">
                <h2> { props.job } </h2>
            </div>

            <div className='card-content'>
                <p> { props.desc } </p>
            </div>
            
        </div>
    )
}