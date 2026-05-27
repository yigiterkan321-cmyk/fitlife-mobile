// src/components/Icon.js — Basit SVG ikon seti
import React from 'react';
import Svg, { Path, Circle, Line, Rect, Polyline } from 'react-native-svg';

export default function Icon({ name, size = 22, color = '#FFFFFF', sw = 2 }) {
  const props = { stroke: color, strokeWidth: sw, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const h = size / 2;
  let body = null;

  switch (name) {
    case 'home':
      body = (<>
        <Path d={`M${-h},0 L0,${-h} L${h},0`} {...props} />
        <Path d={`M${-h*0.7},${-h*0.15} L${-h*0.7},${h*0.8} L${h*0.7},${h*0.8} L${h*0.7},${-h*0.15}`} {...props} />
      </>); break;
    case 'dumbbell':
      body = (<>
        <Rect x={-h} y={-h*0.55} width={h*0.35} height={h*1.1} rx={3} {...props} />
        <Rect x={h*0.65} y={-h*0.55} width={h*0.35} height={h*1.1} rx={3} {...props} />
        <Line x1={-h*0.65} y1={0} x2={h*0.65} y2={0} {...props} />
      </>); break;
    case 'chart':
      body = <Polyline points={`${-h},${h*0.6} ${-h*0.3},${-h*0.1} ${h*0.2},${h*0.25} ${h},${-h*0.7}`} {...props} />; break;
    case 'user':
      body = (<>
        <Circle cx={0} cy={-h*0.35} r={h*0.4} {...props} />
        <Path d={`M${-h*0.75},${h*0.85} a${h*0.75},${h*0.7} 0 0 1 ${h*1.5},0`} {...props} />
      </>); break;
    case 'plus':
      body = (<>
        <Line x1={0} y1={-h*0.75} x2={0} y2={h*0.75} {...props} />
        <Line x1={-h*0.75} y1={0} x2={h*0.75} y2={0} {...props} />
      </>); break;
    case 'fire':
      body = <Path d={`M0,${-h} C${h*0.6},${-h*0.3} ${h*0.5},${h*0.2} 0,${h} C${-h*0.5},${h*0.2} ${-h*0.6},${-h*0.3} 0,${-h} Z`} {...props} />; break;
    case 'run':
      body = (<>
        <Circle cx={h*0.25} cy={-h*0.7} r={h*0.22} fill={color} {...props} />
        <Path d={`M${-h*0.5},${h*0.9} L${-h*0.05},${h*0.35} L${h*0.2},${-h*0.05} L${h*0.55},${h*0.2}`} {...props} />
      </>); break;
    case 'muscle':
      body = <Path d={`M${-h*0.8},${h*0.7} L${-h*0.8},${-h*0.2} a${h*0.4},${h*0.4} 0 0 1 ${h*0.8},0 L0,${h*0.1} a${h*0.45},${h*0.45} 0 0 0 ${h*0.85},${-h*0.1} L${h*0.85},${-h*0.7}`} {...props} />; break;
    case 'yoga':
      body = (<>
        <Circle cx={0} cy={-h*0.65} r={h*0.22} fill={color} {...props} />
        <Path d={`M0,${-h*0.35} L0,${h*0.25}`} {...props} />
        <Path d={`M${-h*0.8},${h*0.7} L0,${h*0.25} L${h*0.8},${h*0.7}`} {...props} />
        <Path d={`M${-h*0.7},${-h*0.05} L${h*0.7},${-h*0.05}`} {...props} />
      </>); break;
    case 'clock':
      body = (<>
        <Circle cx={0} cy={0} r={h*0.85} {...props} />
        <Line x1={0} y1={0} x2={0} y2={-h*0.5} {...props} />
        <Line x1={0} y1={0} x2={h*0.35} y2={h*0.15} {...props} />
      </>); break;
    case 'play':
      body = <Path d={`M${-h*0.4},${-h*0.6} L${-h*0.4},${h*0.6} L${h*0.6},0 Z`} fill={color} stroke={color} />; break;
    case 'back':
      body = <Path d={`M${h*0.3},${-h*0.6} L${-h*0.35},0 L${h*0.3},${h*0.6}`} {...props} />; break;
    case 'heart':
      body = <Path d={`M0,${h*0.55} C${-h*0.9},${-h*0.2} ${-h*0.3},${-h*0.75} 0,${-h*0.25} C${h*0.3},${-h*0.75} ${h*0.9},${-h*0.2} 0,${h*0.55} Z`} {...props} />; break;
    case 'search':
      body = (<>
        <Circle cx={-h*0.15} cy={-h*0.15} r={h*0.55} {...props} />
        <Line x1={h*0.35} y1={h*0.35} x2={h*0.85} y2={h*0.85} {...props} />
      </>); break;
    default:
      body = <Circle cx={0} cy={0} r={h*0.5} {...props} />;
  }
  return (
    <Svg width={size} height={size} viewBox={`${-size/2} ${-size/2} ${size} ${size}`}>
      {body}
    </Svg>
  );
}
