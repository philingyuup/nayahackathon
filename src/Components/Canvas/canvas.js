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
    const layerRef = useRef();
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
        const clickedEmpty = e.target === e.target.getStage()
        if (clickedEmpty) {
            transformRef.current.nodes([])
            transformRef.current.getLayer().draw()
        }
    }

    const downloadClickHandler = () => {
        const dataURL = stageRef.current.toDataURL({pixelRatio: 2})
        var link = document.createElement('a');
        link.download = 'designboard.png';
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    const checkWeightHandler = () => {
        const layerCollection = layerRef.current.getChildren((node) => node.attrs.id !== undefined)
        const weightInformation = layerCollection.map((items) => {
            const weightedObject = {}
            weightedObject.id = items.attrs.id
            weightedObject.weight = ((items.attrs.height - 100) / 4) + 1
            if (isNaN(weightedObject.weight))
                weightedObject.weight = 1
            return weightedObject
        })
        console.log(weightInformation)
    }


    return (
        <div style={{overflowX: 'hidden'}}>
            <div >
                <div style={{ margin: '20px auto', textAlign: 'center', fontSize: '20px'}}> 
                    Images and Themes
                </div>
                <ImageBar imageRef={dragRef}/>
                <TextBar textRef={dragRef} />
            </div>
            <div
                onDrop={onDropHandler}
                onDragOver={e => e.preventDefault()}
            >
                <div style={{margin: '20px auto', textAlign: 'center', fontSize: '40px'}} > 
                    Design Board 
                </div>
                <div style={{ margin: '20px 30%', textAlign: 'center', fontSize: '.8rem' }}> 
                    <i>If you resonate strongly with a certain image, make it larger to stand out more </i>
                </div>
                <Stage
                    width={window.innerWidth * 0.95}
                    height={window.innerHeight * 0.65}
                    style={{ border: '1px solid grey',  margin: '20px 20px'}}
                    ref={stageRef}
                    onClick={onDeselectHandler}
                >
                    <Layer ref={layerRef}>
                        {nodes.map((node, index) => {
                            return node.src ? 
                            <URLImage key={index} id={node.id} itemRef={itemRef} transformRef={transformRef} image={node} isSelected={node.id === selectedNode} /> 
                            : 
                            <TextImage key={index} id={node.id} text={node} isSelected={node.id === selectedNode} onSelect={() => setSelectedNode(node.id)} />
                        })}
                    </Layer>
                </Stage>
            </div>
            <div style={{ margin: '10px 30%', textAlign: 'center', fontSize: '.8rem'}}>
                <i>The board at the moment is a little buggy but the core features work. There is currently no delete or undo so any issues would require a refresh which clears the board (yes, that sucks. I know). Just follow the tips below:</i>
                <p>1. Place image in it's proper location first and <i>then</i> adjust size (click image then drag). There is currently an issue where the width doesn't maintain aspect ratio when dragging <i>after</i> resizing. There is constraints on the max and min size. Try to use the corner adjuster for maintaining aspect ratio. </p>
                <p>2. Click an empty part of the board to deselect adjuster (this is VERY IMPORTANT. The adjustor + image select is currently not working as intended, only the most RECENT placed image can be adjusted).</p>
                <p>3. If you forgot to deselect the adjuster (by clicking on an empty part of the board), now's a good time to refresh the page as the adjuster border will show up in your finalized downloaded image. </p>
                <p>4. <i>Pro Tip:</i> Lign up the image corner to and use the opposite corner to resize to maintain aspect ratio</p>
                <p>5. Words currently can not be adjusted. However they can be overlayed on top of images </p>
                <p>6. Check Weights button currently console logs an array of items in your board and their respective weights </p>
            </div>
            <div style={{margin: '20px 20%', display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <button className='button' onClick={downloadClickHandler} target='_blank'> Download Image </button>
                <button className='button' onClick={checkWeightHandler} > Check Weights </button>
            </div>
        </div>
    );
};