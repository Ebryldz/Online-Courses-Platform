import React from 'react'

export default function Course({ course }) {
    const { id, title, description, link, image } = course;

    return (
        <div className='col-12 col-md-3 px-3'>
            <div className='course'>

                <img src={image} width='100%' height={150}></img>
                <h4>{title}</h4>
                <p>{description}</p>
                <a className='course-link' href={link}>to look at</a>

            </div>

        </div>
    )
}

