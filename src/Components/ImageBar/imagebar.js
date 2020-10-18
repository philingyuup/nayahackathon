import React, { useState } from 'react'

export const ImageBar = ({ imageRef }) => {

    const [imageSrc, setImageSrc] = useState([
        './images/carerraTable.jpg',
        './images/carerraTable2.png',
        './images/carerraTable3.jpg'
    ])


    return (
        <>
            <div style={{ width: '100vw', height: '200px' }}>
                { imageSrc.map((src, index) =>
                <img
                    key={index}
                    id={`image-${index}`}
                    alt="pic"
                    src={src}
                    height='80'
                    draggable="true"
                    onDragStart={e => {
                        imageRef.current = e.target.src;
                    }}
                />
                ) }
            </div>
        </>
    )
}