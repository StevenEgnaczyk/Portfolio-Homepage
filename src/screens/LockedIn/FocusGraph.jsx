import React, { useRef, useCallback, useEffect, forwardRef, useImperativeHandle } from 'react';
import ForceGraph3D from 'react-force-graph-3d';
import { useGraphData } from './GraphDataContext';

const FocusGraph = forwardRef(({ nodeClick }, props, ref) => {
  const fgRef = useRef();
  const { graphData, setGraphData } = useGraphData();

  const handleClick = useCallback(
    (node) =>{
      moveToNode(node);
      nodeClick(node);
    },
    [fgRef]
  );

  const moveToNode = useCallback((node) => {
    const distance = 40;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
      node, // lookAt
      3000 // ms transition duration
    );
  }, [fgRef]);

    // Define the reset function
  const resetCamera = useCallback(() => {

    // Customize this based on your needs
  }, []);

  // Expose the reset function to parent components
  useImperativeHandle(ref, () => ({
    reset: resetCamera,
  }));

  useEffect(() => {
    // Only fetch data if graphData is not available
    if (!graphData) {
      fetch('./miserables.json')
        .then((res) => res.json())
        .then((data) => {
          setGraphData(data); // Set the fetched data to context
        })
        .catch((error) => console.error("Error fetching graph data:", error)); // Handle errors
        setGraphData(graphData);
    }
  }, [graphData, setGraphData]);

  if (!graphData || !graphData.nodes || !graphData.links) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <ForceGraph3D
        ref={fgRef}
        graphData={graphData}
        nodeId="id"
        nodeAutoColorBy="group"
        nodeLabel="id"
        showNavInfo={false}
        nodeOpacity={1}
        enableNodeDrag={false}
        nodeVal={node => Math.sqrt(node.size) / 2} // Set node size based on size property
        onNodeClick={handleClick}
        linkWidth={link => link.thickness} // Use the thickness property
        linkOpacity={0.1}
        backgroundColor="black"
      />
    </div>
  );
});


export default FocusGraph;
