import React, { useState } from 'react'
import { Text } from 'react-konva'

export const TextImage = () => {
    const [isDragging, setIsDragging] = useState(false)
    const [coordinates, setCoordinates] = useState({})
    

    const dragStartHandler = (e) => {
        setIsDragging(!isDragging)
    }

    const dragEndHandler = (e) => {
        setIsDragging(false)
        setCoordinates({x : e.target.x(), y: e.target.y()})
    }

    return (
        <>
            <Text 
                text="Draggable Text"
                x={coordinates.x}
                y={coordinates.y}
                draggable
                fill={this.state.isDragging ? 'green' : 'black'}
                onDragStart={dragStartHandler}
                onDragEnd={dragEndHandler}
            />
        </>
    )
}