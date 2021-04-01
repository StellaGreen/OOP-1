// Définit d'une classe Point
class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    show() {
      console.log(`(${this.x}, ${this.y})`)
    }
    isEqual(point) {
      return this.x === point.x && this.y === point.y ? true : false
    }
    distance(other){
        return Math.sqrt(Math.pow((other.x - this.x), 2) + Math.pow((other.y - this.y), 2))
    }
  }
  // p1 est une instance de Point
  const p1 = new Point(1, 2)
  // p2 est une autre instance de Point
  const p2 = new Point(10, 11)

console.log(p1.distance(p2))

  // racine carré = Math.sqrt(9) // retourne 3
  // mettre au carré = Math.pow(3, 2) // retourne 9, c'est a dire 3 au carré

  exports.Point = Point