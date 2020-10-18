import React, { useRef, useState } from 'react';
import { Stage, Layer} from 'react-konva';
import { URLImage } from '../URLImage/urlimage'
import { ImageBar } from '../ImageBar/imagebar'
import { TextBar } from '../TextBar/textbar'
import { TextImage } from '../Text/textimage'

export const Canvas = () => {

    const dragRef = useRef();
    const stageRef = useRef();
    const [nodes, setNodes] = useState([]);

    const onDropHandler = (e) => {
        // register event position
        stageRef.current.setPointersPositions(e);
        // add image
        setNodes(prevNodes =>
            [
                ...prevNodes,
                {
                    ...stageRef.current.getPointerPosition(),
                    src: dragRef.current.src,
                    text: dragRef.current.innerText
                }
            ])
        console.log(nodes)
    }

    return (
        <div>
            Try to drag an image into the stage:
            <ImageBar imageRef={dragRef}/>
            <TextBar textRef={dragRef} />
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
                        {nodes.map((node, index) => {
                            return node.src 
                            ? <URLImage key={index} image={node} />
                            : <TextImage key={index} text={node} />
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};