class Shape {
  constructor() {
    Shape.all.push(this)
  }

  static clear() {
    Shape.all = []
  }
}

class Rectangle extends Shape {
  constructor() {
    super()
    Rectangle.all.push(this)
  }
}

class Triangle extends Shape {
  constructor() {
    super()
    Triangle.all.push(this)
  }
}

Shape.all = []
Rectangle.all = []
Triangle.all = []

new Shape()
new Rectangle()
new Rectangle()
new Triangle()
new Triangle()
new Triangle()
new Triangle()
new Triangle()

console.log(
  'shapes:', Shape.all.length,
  'rects:', Rectangle.all.length,
  'triangles:', Triangle.all.length
)

console.log('clearing all...')
Shape.clear()

console.log(
  'shapes:', Shape.all.length,
  'rects:', Rectangle.all.length,
  'triangles:', Triangle.all.length
)



