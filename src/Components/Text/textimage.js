import React, { useState } from 'react'
import { Text } from 'react-konva'

export const TextImage = ({ text }) => {
    const [isDragging, setIsDragging] = useState(false)
    const [coordinates, setCoordinates] = useState({})
    

    const dragStartHandler = (e) => {
        setIsDragging(!isDragging)
    }

    const dragEndHandler = (e) => {
        setIsDragging(false)
    }

    return (
        <>
            <Text 
                text={text.text}
                x={text.x}
                y={text.y}
                fontSize={isDragging ? 31 : 30 }
                draggable
                shadowEnabled='true'
                shadowColor='black'
                shadowBlur={8}
                shadowOpacity={0.6}
                shadowOffsetX={isDragging ? 4 : 3}
                shadowOffsetY={isDragging ? 4 : 3}
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
            />
        </>
    )
}