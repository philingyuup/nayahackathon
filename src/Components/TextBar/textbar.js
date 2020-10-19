import React from 'react'

export const TextBar = ({ textRef }) => {
    // const [textSrc, setTextSrc] = useState()

    const textSrc = [
        'Casual',
        'Bold',
        'Colorful',
        'Airy',
        'Electic',
        'Masculine',
        'Retro',
        'Ornate',
        'Feminine',
        'Experimental',
        'Chic',
        'Sleek',
        'Elegant',
        'Modern'
    ]

    return (
        <>
            <div style={{ width: '100vw', height: 'auto', marginTop: '20px'}}>
                {textSrc.map((src, index) =>
                    <span
                        key={index}
                        id={`text${index}`}
                        style={{marginLeft: '5px'}}
                        draggable="true"
                        onDragStart={e => {
                            textRef.current= e.target
                        }}
                    >
                        {src}
                    </span>
                )}
            </div>
        </>
    )
}