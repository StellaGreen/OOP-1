const { human } = require('./classInfo')
const { Point } = require('./point')

//---------HUMAN ---------------
const alice = new human('Alice','Liddell', 27, ['Html', 'Css', 'Php', 'C++'])
alice.printInfo() // warning if you want run this code, get in classInfo the last command to executing in comment or all module are read

// --------- POINT ------------
const p1 = new Point(10, 12)
p1.show()