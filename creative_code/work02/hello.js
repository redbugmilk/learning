const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1000, 1000 ]
};

const sketch = () => {
  const startXScale = Math.random();
  return ({ context, width, height }) => {
    context.fillStyle = 'pink';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'white';
    context.lineWidth = 4;
    context.strokeRect(width/4, height/4, width/2, width/2);

    const startX = startXScale * width;
    context.strokeRect(startX,0,50,50);
  };
};

canvasSketch(sketch, settings);
