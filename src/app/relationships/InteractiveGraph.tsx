'use client';

import React, { useEffect, useRef, useState } from 'react';

interface GraphNode {
  id: string;
  name: string;
  type: string;
  description: string;
  thumbnailUrl?: string | null;
  // Physics parameters
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface GraphEdge {
  id: string;
  source: string;
  target: string;
  type: string;
}

interface InteractiveGraphProps {
  nodes: { id: string; name: string; type: string; description: string; thumbnailUrl?: string | null }[];
  edges: GraphEdge[];
  selectedId: string | null;
  onSelectNode: (id: string | null) => void;
}

export default function InteractiveGraph({
  nodes,
  edges,
  selectedId,
  onSelectNode,
}: InteractiveGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Viewport transform states
  const [zoom, setZoom] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  // Local physics nodes storage
  const physicsNodesRef = useRef<GraphNode[]>([]);
  const isDraggingRef = useRef<boolean>(false);
  const draggedNodeIdRef = useRef<string | null>(null);

  // Keep track of width & height
  const dimensionsRef = useRef({ width: 800, height: 600 });

  // Map nodes color codes
  const getNodeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'character':
        return '#a855f7'; // Purple
      case 'location':
        return '#06b6d4'; // Cyan
      case 'vehicle':
        return '#f97316'; // Orange
      case 'weapon':
        return '#ef4444'; // Red
      case 'business':
        return '#eab308'; // Yellow
      case 'screenshot':
      case 'artwork':
        return '#ec4899'; // Pink
      case 'trailer':
        return '#10b981'; // Emerald
      default:
        return '#6b7280'; // Gray
    }
  };

  // Synchronize incoming nodes to local physics nodes ref
  useEffect(() => {
    const existingMap = new Map(physicsNodesRef.current.map((n) => [n.id, n]));

    const centerW = dimensionsRef.current.width / 2;
    const centerH = dimensionsRef.current.height / 2;

    physicsNodesRef.current = nodes.map((node) => {
      const existing = existingMap.get(node.id);
      if (existing) return existing;

      // Position new nodes randomly around center
      const angle = Math.random() * Math.PI * 2;
      const radius = 50 + Math.random() * 150;
      return {
        ...node,
        x: centerW + Math.cos(angle) * radius,
        y: centerH + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
      };
    });
  }, [nodes]);

  // Center selected node smoothly on updates
  useEffect(() => {
    if (!selectedId) return;
    const target = physicsNodesRef.current.find((n) => n.id === selectedId);
    if (target) {
      setPanX(dimensionsRef.current.width / 2 - target.x * zoom);
      setPanY(dimensionsRef.current.height / 2 - target.y * zoom);
    }
  }, [selectedId]);

  // Physics animation tick
  useEffect(() => {
    let animationId: number;

    const tick = () => {
      const pNodes = physicsNodesRef.current;
      const nodesMap = new Map(pNodes.map((n) => [n.id, n]));

      // 1. Repulsive forces (charge) between all nodes
      const chargeStrength = 600;
      for (let i = 0; i < pNodes.length; i++) {
        const nodeA = pNodes[i];
        for (let j = i + 1; j < pNodes.length; j++) {
          const nodeB = pNodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          if (dist < 300) {
            const force = chargeStrength / (dist * dist);
            const ax = force * (dx / dist);
            const ay = force * (dy / dist);
            
            // Skip updates on currently dragged node
            if (nodeA.id !== draggedNodeIdRef.current) {
              nodeA.vx -= ax;
              nodeA.vy -= ay;
            }
            if (nodeB.id !== draggedNodeIdRef.current) {
              nodeB.vx += ax;
              nodeB.vy += ay;
            }
          }
        }
      }

      // 2. Attractive forces (links/spring tension) along edges
      const springLength = 120;
      const springStrength = 0.04;
      edges.forEach((edge) => {
        const sourceNode = nodesMap.get(edge.source);
        const targetNode = nodesMap.get(edge.target);
        if (!sourceNode || !targetNode) return;

        const dx = targetNode.x - sourceNode.x;
        const dy = targetNode.y - sourceNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - springLength) * springStrength;
        const ax = force * (dx / dist);
        const ay = force * (dy / dist);

        if (sourceNode.id !== draggedNodeIdRef.current) {
          sourceNode.vx += ax;
          sourceNode.vy += ay;
        }
        if (targetNode.id !== draggedNodeIdRef.current) {
          targetNode.vx -= ax;
          targetNode.vy -= ay;
        }
      });

      // 3. Center gravity pulling elements to viewport center
      const gravity = 0.015;
      const friction = 0.85;
      const targetCenterX = dimensionsRef.current.width / 2;
      const targetCenterY = dimensionsRef.current.height / 2;

      pNodes.forEach((node) => {
        if (node.id === draggedNodeIdRef.current) return;

        node.vx += (targetCenterX - node.x) * gravity;
        node.vy += (targetCenterY - node.y) * gravity;
        
        node.vx *= friction;
        node.vy *= friction;

        node.x += node.vx;
        node.y += node.vy;
      });

      // 4. Clear and draw canvas
      drawCanvas();
      animationId = requestAnimationFrame(tick);
    };

    const drawCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Adjust dimensions
      if (canvas.width !== canvas.clientWidth || canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
        dimensionsRef.current = { width: canvas.width, height: canvas.height };
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Save matrix context
      ctx.save();
      ctx.translate(panX, panY);
      ctx.scale(zoom, zoom);

      // A. Draw link lines (edges)
      edges.forEach((edge) => {
        const sourceNode = physicsNodesRef.current.find((n) => n.id === edge.source);
        const targetNode = physicsNodesRef.current.find((n) => n.id === edge.target);
        if (!sourceNode || !targetNode) return;

        ctx.beginPath();
        ctx.moveTo(sourceNode.x, sourceNode.y);
        ctx.lineTo(targetNode.x, targetNode.y);
        ctx.strokeStyle = selectedId === sourceNode.id || selectedId === targetNode.id 
          ? '#ec4899' 
          : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = selectedId === sourceNode.id || selectedId === targetNode.id ? 2 : 1;
        ctx.stroke();

        // Relation label text in middle
        if (selectedId === sourceNode.id || selectedId === targetNode.id) {
          const midX = (sourceNode.x + targetNode.x) / 2;
          const midY = (sourceNode.y + targetNode.y) / 2;
          ctx.font = '9px monospace';
          ctx.fillStyle = '#f472b6';
          ctx.textAlign = 'center';
          ctx.fillText(edge.type.replace(/_/g, ' '), midX, midY - 4);
        }
      });

      // B. Draw nodes
      physicsNodesRef.current.forEach((node) => {
        const isSelected = node.id === selectedId;
        const color = getNodeColor(node.type);

        ctx.beginPath();
        ctx.arc(node.x, node.y, isSelected ? 15 : 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = isSelected ? 15 : 0;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset shadow

        // Inner marker ring
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node labels
        ctx.font = isSelected ? 'bold 12px sans-serif' : '10px sans-serif';
        ctx.fillStyle = isSelected ? '#ffffff' : '#9ca3af';
        ctx.textAlign = 'center';
        ctx.fillText(node.name, node.x, node.y + (isSelected ? 32 : 24));
      });

      ctx.restore();
    };

    animationId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationId);
  }, [edges, zoom, panX, panY, selectedId]);

  // Click & Drag mouse handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = (e.clientX - rect.left - panX) / zoom;
    const clickY = (e.clientY - rect.top - panY) / zoom;

    // Detect if clicking a node
    const clickedNode = physicsNodesRef.current.find((node) => {
      const dist = Math.sqrt((node.x - clickX) ** 2 + (node.y - clickY) ** 2);
      return dist < (node.id === selectedId ? 20 : 15);
    });

    if (clickedNode) {
      draggedNodeIdRef.current = clickedNode.id;
      isDraggingRef.current = true;
      onSelectNode(clickedNode.id);
    } else {
      isDraggingRef.current = false;
      draggedNodeIdRef.current = null;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();

    if (isDraggingRef.current && draggedNodeIdRef.current) {
      // Update dragged node position directly
      const mouseX = (e.clientX - rect.left - panX) / zoom;
      const mouseY = (e.clientY - rect.top - panY) / zoom;
      const draggedNode = physicsNodesRef.current.find((n) => n.id === draggedNodeIdRef.current);
      if (draggedNode) {
        draggedNode.x = mouseX;
        draggedNode.y = mouseY;
        draggedNode.vx = 0;
        draggedNode.vy = 0;
      }
    } else if (e.buttons === 1) {
      // Pan viewport
      setPanX((prev) => prev + e.movementX);
      setPanY((prev) => prev + e.movementY);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    draggedNodeIdRef.current = null;
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const zoomIntensity = 0.1;
    const scale = e.deltaY < 0 ? 1 + zoomIntensity : 1 - zoomIntensity;
    const nextZoom = Math.min(Math.max(zoom * scale, 0.2), 3);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Center zoom at mouse coordinates
    setPanX((prev) => mouseX - (mouseX - prev) * (nextZoom / zoom));
    setPanY((prev) => mouseY - (mouseY - prev) * (nextZoom / zoom));
    setZoom(nextZoom);
  };

  return (
    <canvas
      ref={canvasRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      className="h-full w-full cursor-grab active:cursor-grabbing bg-[#090b0e]"
    />
  );
}
