const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [ 1000, 1000 ]
  };

  const listArtists = (artists) => {
    artists.forEach(element => {
        console.log(element);
    });
  }

  const sketch = () => {
    return ({ context, width, height }) => {
        const artists = ["Lady Gaga", "Royal Blood", "Frida Kahlo", "Paula Rego", "Mariana a Miserável"]
        listArtists(artists);
        const w = width * 0.10;
        const h = height * 0.10;
        const gap = width * 0.03;
        const ix = width * 0.17;
        const iy = height * 0.17;
        let x, y;
        const off = width * 0.02;
        context.lineWidth = width * 0.002;
        context.fillStyle = "pink";
        context.fillRect(0,0,width, height);
        context.strokeStyle = "white";

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                x = ix + (w + gap) * i;
                y = iy + (h + gap )* j;
                context.beginPath();
                context.rect(x, y, w, h);
                context.stroke();
                if( Math.random() > 0.5 ){
                    context.beginPath();
                    context.rect(x + off/2, y + off/2, w - off, h - off );
                    context.stroke();
                } else {
                    context.beginPath();
                    context.fillStyle = "white";
                    context.fillRect(x + off/2, y + off/2, w - off, h - off );
                    context.stroke();
                }
            }
        }
    }
  }

canvasSketch(sketch, settings);