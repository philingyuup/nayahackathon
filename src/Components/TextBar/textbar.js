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
        'Modern',
        'Bohemian',
        'Furturistic',
        'Minimalistic',
        'Brutalist',
        'Cute',
        'Rustic',
        'Classic',
        'Cubic',
        'Angular',
        'Circular',
        'Edgy',
        'Organic',
        'Light',
        'Rectilinear',
        'Round',
        'Slim',
        'Modular',
        'Geometric',
        'Curvilinear',
        'African',
        'Japanese',
        'Scandinavian',
        'Italian',
        'Spanish',
        'Arabic'
    ]

    return (
        <>
            <div style={{ width: '95vw', height: 'auto', marginTop: '20px', overflowX: 'scroll', marginLeft: '8px'}}>
                {textSrc.map((src, index) =>
                    <span
                        key={index}
                        id={`text${index}`}
                        style={{marginLeft: '8px', }}
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