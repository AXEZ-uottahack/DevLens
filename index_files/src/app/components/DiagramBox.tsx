import React, { useEffect, useRef } from "react";
import { Cell, Graph, InternalEvent } from '@maxgraph/core';
import { useMediaQuery } from 'react-responsive'

type DiagramBoxProps = {
  classes: any[], 
  associations: any[]
}

const DiagramBox: React.FC<DiagramBoxProps> = ({classes, associations}: DiagramBoxProps) => {
  const divGraph = useRef(null);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const class_style = {
    baseStyleNames: ['rounded'],
    fillColor: systemPrefersDark ? '#0a0a0a': '#ffffff',
    strokeColor: systemPrefersDark ? '#ededed': '#171717'
  }

  const assoc_style = {
    edgeStyle: 'orthogonalEdgeStyle',
    rounded: true,
    strokeColor: systemPrefersDark ? '#ededed': '#171717'
  }

  useEffect(() => {
    if (divGraph.current != null) {
      InternalEvent.disableContextMenu(divGraph.current);
      const graph = new Graph(divGraph.current);
      graph.setPanning(true);
      const parent = graph.getDefaultParent();

      const class_map: Map<string, Cell> = new Map();

      graph.batchUpdate(() => {
        for (let i = 0; i < classes.length; i++) {
          const vertex = graph.insertVertex({
            parent,
            position: [10, 10],
            size: [100, 100],
            value: classes[i].name,
            style: class_style
          });
          class_map.set(classes[i].name, vertex);
        }

        for (let i = 0; i < associations.length; i++) {
          // not handling the bidir bool right now
          graph.insertEdge({
            parent,
            source: class_map.get(associations[i].start),
            target: class_map.get(associations[i].end),
            value: `${associations[i].start_m}--${associations[i].end_m}`,
            style: {
              ...assoc_style,
              endArrow: associations[i].bidir ? 'none' : 'open'
            }
          });
        }
      });

      return () => { 
        // graph.removeCells(cells);
        divGraph.current = null;
      }
    }
  });

  return <div className="graph-container" ref={divGraph} id="divGraph" />;
};

export default DiagramBox;
