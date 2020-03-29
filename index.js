// Write your solution here!
const append = ["Milo", "Otis", "Garfield"]
const prepend = ["Milo", "Otis", "Garfield"]
const removeLast = ["Milo", "Otis", "Garfield"]
const removeFirst = ["Milo", "Otis", "Garfield"]

append.push("Odie")
prepend.unshift("Odie")
removeLast.splice(-1) 
// Splicing is permanent, slicing is not and returns a new array.
// Remove Last can be also done using pop
//removeLast.pop()
//the ending of arrays is -1

removeFirst.splice(0,1) // Remove first can be also done using pop and shift
//removeFirst.shift()

//arrays in javascript start with 0
//splice works like this
//array.splice(start)
//array.splice(start, deleteCount)
//array.splice(start, deleteCount, item1, item2, ...)