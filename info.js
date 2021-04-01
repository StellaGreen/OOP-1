const alice = {
    firstName: 'Alice',
    lastName: 'Liddell',
    age: 28,
    langage: ['Html', 'Css', 'Php', 'C++']
}
const bob = {
    firstName: 'Bob',
    lastName: 'Lemon',
    age: 30,
    langage: ['Python', 'Java', 'Julia']
}
const charlie = {
    firstName: 'Charlie',
    lastName: 'Charlot',
    age: 8,
    langage: ['Ruby', 'Swift']
}
const printInfo = (person) => {
    console.log(`First name : ${person.firstName}\nLast name : ${person.lastName}\nAge : ${person.age}`)
}
printInfo(charlie)

const canVote = (person) => {
    if(person.age > 18){
        console.log('true')
    } else {
        console.log('false')
    }
}
canVote(charlie)
const mostSkilledDev = (person, personSecond) => {
    if(person.langage.length > personSecond.langage.length){
        console.log(`${person.firstName} know the most languages of programmation (${person.langage.length} vs ${personSecond.langage.length})`)
    } else if(person.langage.length < personSecond.langage.length){
        console.log(`${personSecond.firstName} know the most languages of programmation (${personSecond.langage.length} vs ${person.langage.length})`)
    } else {
        return 'draw'
    }
}
mostSkilledDev(alice, bob)
mostSkilledDev(bob, charlie)
mostSkilledDev(charlie, alice)