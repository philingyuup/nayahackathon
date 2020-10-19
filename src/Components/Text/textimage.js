import React, { useState } from 'react'
import { Text } from 'react-konva'

export const TextImage = ({ text, id }) => {
    const [isDragging, setIsDragging] = useState(false)    

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
                id={id}
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