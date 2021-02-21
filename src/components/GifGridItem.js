import React from 'react'

export default function GifGridItem({id,title,url}) {
    return (
        <div className='card animate__animated animate__bouncex'>
            <img src={url} alt={title} ></img>
            <p>{title}</p>
        </div>
    )
}
