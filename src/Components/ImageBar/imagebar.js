import React, { useState } from 'react'

export const ImageBar = ({ imageRef }) => {

    const [imageSrc, setImageSrc] = useState([
        './images/carerraTable.jpg',
        './images/carerraTable2.png',
        './images/carerraTable3.jpg',
        './images/Carerra/carerra4.jpg',
        './images/Carerra/carerra5.jpg',
        './images/Carerra/carerra6.jpg',
        './images/ModularStorage/storage1.jpg',
        './images/ModularStorage/storage2.jpg',
        './images/ModularStorage/storage3.jpg',
        './images/ModularStorage/storage4.jpg',
        './images/ModularStorage/storage5.jpg',
        './images/ModularStorage/storage6.jpg',
        './images/ModularStorage/storage7.jpg',
        './images/ModularStorage/storage8.jpg',
        './images/ModularStorage/storage9.png',
        './images/ModularStorage/storage10.jpg',
        './images/TVStand/tvstand.jpg',
        './images/TVStand/tvstand1.jpg',
        './images/TVStand/tvstand2.jpeg',
        './images/TVStand/tvstand3.jpeg',
        './images/TVStand/tvstand4.jpeg',
    ])


    return (
        <>
            <div style={{ width: '95vw', height: 'auto', overflowX: 'scroll', whiteSpace: 'nowrap', marginLeft: '8px'}}>
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