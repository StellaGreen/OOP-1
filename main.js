const { human } = require('./classInfo')
const { Point } = require('./point')

//---------HUMAN ---------------
const alice = new human('Alice','Liddell', 27, ['Html', 'Css', 'Php', 'C++'])
alice.printInfo()

// --------- POINT ------------
const p1 = new Point(10, 12)
p1.show()