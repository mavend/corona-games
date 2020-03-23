import React from "react";
import { Segment } from "semantic-ui-react";
import smooth_path from "./utils/smooth_path";

const Drawing = ({ lines, ...props }) => {
  const styles = {
    wrapper: {
      padding: 0
    },
    svg: {
      width: "100%",
      height: "100%",
      backgroundColor: "#FFF",
    }
  }
  const vbWidth = 800, vbHeight = 600;

  const scaleToViewBox = ({ points, ...line }) => ({
    ...line,
    points: points.map(p => [p[0] * vbWidth, p[1] * vbHeight])
  });

  return (
    <Segment style={styles.wrapper}>
      <svg 
        style={styles.svg} 
        viewBox={`0 0 ${vbWidth} ${vbHeight}`}
        {...props}>
        {lines.map((line, id) => (
          <DrawingLine 
            key={id}
            line={scaleToViewBox(line)}
            viewBoxWidth />
        ))}
      </svg>
    </Segment>
  );
};

const DrawingLine = ({ line: { points, color, width} }) => (
  <path fill="none"
    stroke={color}
    strokeWidth={width}
    d={smooth_path(points, 0.2)} />
);

export default Drawing;
