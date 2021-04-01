class human {
    constructor(firstName, lastName, age, langage) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.langage = langage
    }
    printInfo() {
        console.log(`First name : ${this.firstName}\nLast name : ${this.lastName}\nAge : ${this.age}`)
    }
    canVote() {
        if(this.age > 18){
            console.log('true')
        } else {
            console.log('false')
        }
    }
    mostSkilledDev(person) {
        if(this.langage.length > person.langage.length){
            console.log(`${this.firstName} know the most languages of programmation (${this.langage.length} vs ${person.langage.length})`)
        } else if(this.langage.length < person.langage.length){
            console.log(`${person.firstName} know the most languages of programmation (${person.langage.length} vs ${this.langage.length})`)
        } else {
            return 'draw'
        }
    }
}
const alice = new human('Alice','Liddell', 27, ['Html', 'Css', 'Php', 'C++'])
const bob = new human('Bob','Lemon', 30, ['Python', 'Java', 'Julia'])
const charlie = new human('Charlie','Charlot', 8, ['Ruby', 'Swift'])

alice.printInfo()
bob.printInfo()
charlie.printInfo()
alice.canVote()
bob.canVote()
charlie.canVote()
alice.mostSkilledDev(bob)
bob.mostSkilledDev(charlie)
charlie.mostSkilledDev(alice)

exports.human = human