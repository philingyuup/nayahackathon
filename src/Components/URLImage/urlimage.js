import React, { useState } from 'react'
import { Image, Transformer } from 'react-konva'
import useImage from 'use-image';

export const URLImage = ({ image, isSelected, id, onSelect, itemRef, transformRef }) => {

    const [img] = useImage(image.src);
    //used for setting dragEvent transforms
    const [height, setHeight] = useState(100)
    const [isDragging, setIsDragging] = useState(false)

    // const determineWidth = () => {
    //     return img ? img.width * (150 / img.height) : 0
    // }

    

    // useEffect(() => {
    //     console.log(transformRef.current)
    //     if(isSelected) {
    //         //sets the transformer to the node
    //         transformRef.current.nodes([itemRef])
    //         transformRef.current.getLayer().batchDraw()
    //     }
    // }, [isSelected])


    const dragStartHandler = (e) => {
        setIsDragging(!isDragging)
    }

    const dragEndHandler = (e) => {
        setIsDragging(false)
    }

    //attached transformer to the last clicked itemRef
    const onClickHandler = (e) => {
        transformRef.current.nodes([itemRef.current])
        transformRef.current.getLayer().batchDraw()
    }

    //constraints for image sizes
    const boundBoxFunctionHandler = (oldImage, newImage) => {
        if (Math.abs(newImage.height) > 180 || Math.abs(newImage.height) < 100) {
            return oldImage
        }
        setHeight(newImage.height)
        return newImage
    }


    return (
        <>
            <Image
                id={id}
                image={img}
                ref={itemRef}
                x={image.x}
                y={image.y}
                rotation={0}
                height={height}
                width={img ? img.width * (150 / img.height) : 0}
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
                onClick={onClickHandler}
            />
            <Transformer
                    ref={transformRef}
                    resizeEnabled={true}
                    keepRatio={true}
                    boundBoxFunc={boundBoxFunctionHandler}
            />

        </>
    )
}