import './LockedIn.css';
import React, { useEffect, useRef, useState } from "react";
import { useGraphData } from "./GraphDataContext";
import ForceGraph3D from "react-force-graph-3d";
import NavBarLeft from "./NavBarLeft";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import FocusGraph from './FocusGraph';
import PositionControls from './PositionControls';
import { GraphDataProvider } from './GraphDataContext';

const LockedIn = () => {


  const [activeNode, setActiveNode] = useState(null);
  const graphRef = useRef();
  const { graphData } = useGraphData();

  const [resetCamera, setResetCamera ] = useState(false);

  const handleNodeClick = (node) => {
      setActiveNode(node);
  }

  return (
            <div className='page'>
      <div style={{ width: '100vw', height: '100vh', margin: 0 }}>
      <FocusGraph nodeClick={handleNodeClick} resetCamera={resetCamera} ref={graphRef} />
      </div>
      <div className='navbarleft'>
        <NavBarLeft activeNode={activeNode}/>
      </div>
      <div className='position-controls'>
        <PositionControls setResetCamera={setResetCamera} />
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default LockedIn;
