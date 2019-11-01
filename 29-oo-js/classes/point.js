class Point {
  constructor(xx, yy) {
    this.xx = xx
    this.yy = yy

    Point.all.push(this)
  }

  static distance(p1, p2) {
    let dx = p1.xx - p2.xx
    let dy = p1.yy - p2.yy
    return Math.sqrt(dx * dx + dy * dy)
  }
}

Point.all = []

let p0 = new Point(0, 0)
let p1 = new Point(4, 5)
console.log('distance from p0 to p1:', Point.distance(p0, p1))