const canvasSketch = require('canvas-sketch');

const settings = {
  //dimensions: [ 1000, 1000 ]
  dimensions: 'A4',
  pixelsPerInch: 300,
  orientation: 'landscape'
};

const changeSquare = () => {
  const width = 60;
  const height = 60;
  const gap = 20;

  for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
          let x = 100 + (width + gap) * i;
          let y = 100 + (height + gap )* j;
          context.beginPath();
          context.rect(x, y, width, height);
          context.stroke();
          if( Math.random() > 0.5 ){
              context.beginPath();
              context.rect(x + 8, y + 8, width - 16, height - 16 );
              context.stroke();
          } else {
              context.beginPath();
              context.fillStyle = "pink";
              context.fillRect(x + 8, y + 8, width - 20, height - 20 );
              context.stroke();
          }
      }
  }
}

const sketch = () => {
  return ({ context, width, height }) => {
    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    let x, y;
    const off = width * 0.02;
    context.lineWidth = width * 0.002;

    
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            x = ix + (w + gap) * i;
            y = iy + (h + gap )* j;
            context.beginPath();
            context.rect(x, y, w, h);
            context.stroke();
            if( Math.random()  > 0.5 ){
                context.beginPath();
                context.rect(x + off/2, y + off/2, w - off, h - off );
                context.stroke();
            } else {
                context.beginPath();
                context.fillStyle = "pink";
                context.fillRect(x + off/2, y + off/2, w - off, h - off );
                context.stroke();
            }
        }
    }
  };
};

canvasSketch(sketch, settings);
