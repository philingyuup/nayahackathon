import React, { useState } from 'react'

export const TextBar = ({ textRef }) => {
    const [textSrc, setTextSrc] = useState([
        'Casual',
        'Bold',
        'Colorful',
        // 'Airy',
        // 'Electic',
        // 'Masculine',
        // 'Retro',
        // 'Ornate',
        // 'Feminine',
        // 'Experimental',
        // 'Chic',
        // 'Sleek',
        // 'Elegant',
        // 'Modern'
    ])


    return (
        <>
            <div style={{ width: '100vw', height: '200px' }}>
                {textSrc.map((src, index) =>
                    <div
                        key={index}
                        id={`text-${index}`}
                        
                        draggable="true"
                        onDragStart={e => {
                            textRef.current = e.target.src;
                        }}
                    >
                        '#'{src}
                    </div>
                )}
            </div>
        </>
    )
}