import React, { useState } from 'react'
import { Image } from 'react-konva'
import useImage from 'use-image';

export const URLImage = ({ image }) => {

    const [img] = useImage(image.src);
    //used for setting dragEvent transforms
    const [isDragging, setIsDragging] = useState(false)

    const dragStartHandler = (e) => {
        setIsDragging(!isDragging)
    }

    const dragEndHandler = (e) => {
        setIsDragging(false)
    }

    return (
        <Image
            image={img}
            x={image.x}
            y={image.y}
            height={120}
            width={img ? img.width * (150/img.height) : 0}
            draggable
            shadowEnabled='true'
            shadowColor='black'
            shadowBlur={8}
            shadowOpacity={0.6}
            shadowOffsetX={isDragging ? 4 : 3}
            shadowOffsetY={isDragging ? 4 : 3}
            scaleX={isDragging ? 1.01 : 1}
            scaleY={isDragging? 1.01 : 1}
            imageSmoothingEnabled='true'
            onDragStart={dragStartHandler}
            onDragEnd={dragEndHandler}
        />
    );
};