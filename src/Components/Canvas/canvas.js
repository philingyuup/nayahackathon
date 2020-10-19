import React, { useRef, useState } from 'react';
import { Stage, Layer} from 'react-konva';
import { URLImage } from '../URLImage/urlimage'
import { ImageBar } from '../ImageBar/imagebar'
import { TextBar } from '../TextBar/textbar'
import { TextImage } from '../Text/textimage'

export const Canvas = () => {

    const transformRef = useRef()
    const itemRef = useRef()
    const dragRef = useRef();
    const stageRef = useRef();
    const [nodes, setNodes] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null)

    const onDropHandler = (e) => {
        // register event position
        stageRef.current.setPointersPositions(e);
        // add image
        setNodes(prevNodes =>
            [
                ...prevNodes,
                {
                    id: dragRef.current.id,
                    ...stageRef.current.getPointerPosition(),
                    src: dragRef.current.src,
                    text: dragRef.current.innerText
                }
            ])
    }

    //deselects the transformer
    const onDeselectHandler = (e) =>{
        console.log(e.target.getStage())
        const clickedEmpty = e.target === e.target.getStage()
        if (clickedEmpty) {
            transformRef.current.nodes([])
            transformRef.current.getLayer().draw()
        }
    }

    // const onChangeHandler = (e) => {
    //     console.log(e.target)
    //     console.log(selectedNode)
    // }

    return (
        <div>
            <div >
                <div style={{ margin: '20px auto', textAlign: 'center', fontSize: '20px' }}> Drag Zone </div>
                <ImageBar imageRef={dragRef}/>
                <TextBar textRef={dragRef} />
            </div>
            <div
                onDrop={onDropHandler}
                onDragOver={e => e.preventDefault()}
            >
                <div style={{margin: '20px auto', textAlign: 'center', fontSize: '40px'}} > Magic Board</div>
                <Stage
                    width={window.innerWidth * 0.95}
                    height={window.innerHeight * 0.65}
                    style={{ border: '1px solid grey',  margin: '20px 20px'}}
                    ref={stageRef}
                    onClick={onDeselectHandler}
                >
                    <Layer>
                        {nodes.map((node, index) => {
                            return node.src ? 
                            <URLImage key={index} id={node.id} itemRef={itemRef} transformRef={transformRef} image={node} isSelected={node.id === selectedNode} /> 
                            : 
                            <TextImage key={index} id={node.id} text={node} isSelected={node.id === selectedNode} onSelect={() => setSelectedNode(node.id)} />
                        })}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
};