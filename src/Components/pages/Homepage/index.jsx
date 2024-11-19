import React, { useCallback } from "react";
import styles from "./index.module.css";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import AddLeadSource from "../../NodeTypes/AddLeadSource";
import Modal from "../../elements/Modal";
import SelectLeadSource from "../../elements/SelectLeadSource";

const nodeTypes = { textUpdater: AddLeadSource };

const initialNodes = [
  {
    id: "1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { label: "1" },
  },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const Homepage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className={styles["container"]}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>

      <SelectLeadSource />
    </div>
  );
};

export default Homepage;
