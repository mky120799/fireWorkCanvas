

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
  x: innerWidth ,
  y: innerHeight
}



// Event Listeners


addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight

  init()
})


class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.velocity=velocity;
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw();
    this.x+=this.velocity.x;
    this.y+=this.velocity.y;
  }
}

// Implementation
let particles;
function init() {
  particles = []

  for (let i = 0; i < 400; i++) {
    // objects.push()
  }
}

// Animation Loop
function animate() {
  
  requestAnimationFrame(animate)
  c.fillStyle = 'rgba(0,0,0,1)'
  c.clearRect(0, 0, canvas.width, canvas.height)
  
  particles.map((Particle)=>{
    Particle.update();
  })

}
init()
animate()

addEventListener('click',(event)=>{
    mouse.x=event.clientX;
    mouse.y=event.clientY;
    const particleCount = 400;
    const angleIncrement = (Math.PI*2)/particleCount;
     console.log(angleIncrement);
    for(let i=0;i<400;i++)
    {
      particles.push(new Particle(
        mouse.x, mouse.y, 5, 'blue',{
            x:Math.cos(angleIncrement*i)*Math.random(),
            y:Math.sin(angleIncrement*i)
        }
      ))
    }
    console.log(particles);
})