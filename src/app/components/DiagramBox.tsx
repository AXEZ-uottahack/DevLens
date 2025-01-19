import React, { useEffect, useRef } from "react";
import { Cell, CircleLayout, Graph, InternalEvent } from "@maxgraph/core";
import { useTheme } from "../context/ThemeContext";

type DiagramBoxProps = {
  classes: any[];
  associations: any[];
};

const WIDTH_FACTOR = 10;
const HEIGHT_FACTOR = 20;

const getClassText = (class_name: string, attrs: any[]) => {
  const lines = [class_name];
  let max_length = class_name.length;

  for (let i = 0; i < attrs.length; i++) {
    const line = `${attrs[i].modifier} ${attrs[i].name}: ${attrs[i].type}`;
    lines.push(line);
    max_length = line.length > max_length ? line.length : max_length;
  }

  return [lines[0]].concat([(lines.length > 1 ? '-' : ' ').repeat(max_length)]).concat(lines.slice(1));
}

const DiagramBox: React.FC<DiagramBoxProps> = ({
  classes,
  associations,
}: DiagramBoxProps) => {
  const divGraph = useRef(null);
  const { theme, toggleTheme } = useTheme();

  const getClassStyle = () => ({
    baseStyleNames: ["rounded"],
    fillColor: theme === "dark" ? "#0a0a0a" : "#ffffff",
    strokeColor: theme === "dark" ? "#ededed" : "#171717",
    fontColor: theme === "dark" ? "#ededed" : "#171717",
  });

  const getAssocStyle = () => ({
    edgeStyle: "orthogonalEdgeStyle",
    rounded: true,
    strokeColor: theme === "dark" ? "#ededed" : "#171717",
  });

  useEffect(() => {
    InternalEvent.disableContextMenu(divGraph.current);
    const graph = new Graph(divGraph.current);
    const layout = new CircleLayout(graph);
    graph.setPanning(true);
    const parent = graph.getDefaultParent();

    const class_map: Map<string, Cell> = new Map();

    const updateGraph = () => {
      const class_style = getClassStyle();
      const assoc_style = getAssocStyle();

      // Clear the graph before redrawing
      graph.removeCells(graph.getChildVertices(parent));

      graph.batchUpdate(() => {
        // Add classes
        for (let i = 0; i < classes.length; i++) {
          const textValue = getClassText(
            classes[i].name,
            classes[i].attributes
          );
          const vertex = graph.insertVertex({
            parent,
            position: [10, 10],
            size: [
              textValue[1].length * WIDTH_FACTOR,
              textValue.length * HEIGHT_FACTOR,
            ],
            value: textValue.join("\n"),
            style: class_style,
          });
          class_map.set(classes[i].name, vertex);
        }

        // Add associations
        for (let i = 0; i < associations.length; i++) {
          graph.insertEdge({
            parent,
            source: class_map.get(associations[i].start),
            target: class_map.get(associations[i].end),
            value: `${associations[i].start_m}--${associations[i].end_m}`,
            style: {
              ...assoc_style,
              endArrow: associations[i].bidir ? "none" : "open",
            },
          });
        }
      });
    };

    // Initial render
    updateGraph();
    layout.execute(graph.getDefaultParent());

    // Re-run the update when the theme changes
    return () => {
      graph.destroy(); // Clean up the graph instance when the component unmounts
    };
  }, [classes, associations, theme]); // Run this effect whenever `classes`, `associations`, or `theme` changes.

  return (
    <div
      style={{ width: "50vw", height: "90vh" }}
      className="graph-container"
      ref={divGraph}
      id="divGraph"
    />
  );
};

export default DiagramBox;
