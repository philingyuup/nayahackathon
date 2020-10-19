import React, { useState } from 'react'

export const ImageBar = ({ imageRef }) => {

    const [imageSrc, setImageSrc] = useState([
        './images/carerraTable.jpg',
        './images/carerraTable2.png',
        './images/carerraTable3.jpg'
    ])


    return (
        <>
            <div style={{ width: '100vw', height: 'auto' }}>
                { imageSrc.map((src, index) =>
                <img
                    key={index}
                    id={`image${index}`}
                    alt="pic"
                    style={{ marginLeft: '10px'}}
                    src={src}
                    height='80'
                    draggable="true"
                    onDragStart={e => {
                        imageRef.current = e.target
                    }}
                />
                ) }
            </div>
        </>
    )
}