import React, { useRef, useState } from 'react';
import { Stage, Layer} from 'react-konva';
import { URLImage } from '../URLImage/urlimage'
import { ImageBar } from '../ImageBar/imagebar'
import { TextBar } from '../TextBar/textbar'

export const Canvas = () => {

    const imageRef = useRef();
    const textRef = useRef();
    const stageRef = useRef();
    const [images, setImages] = useState([]);

    const onDropHandler = (e) => {
        // register event position
        stageRef.current.setPointersPositions(e);
        // add image
        setImages(prevImages =>
            [
                ...prevImages,
                {
                    ...stageRef.current.getPointerPosition(),
                    src: imageRef.current
                }
            ])
    }


    return (
        <div>
            Try to drag an image into the stage:
            <br />
            <ImageBar imageRef={imageRef}/>
            <TextBar textRef={textRef} />
            <div
                onDrop={onDropHandler}
                onDragOver={e => e.preventDefault()}
            >
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    style={{ border: '1px solid grey' }}
                    ref={stageRef}
                >
                    <Layer>
                        {images.map((image, index) => {
                            return <URLImage key={index}  image={image} />;
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};