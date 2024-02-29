const title = "Group Manager, Cybersecurity Risk and Operations Management  OneTech"

let sortTitle = title.split(" ")
sortTitle[sortTitle.length - 2] = "</br>"

const newTitle = sortTitle.toString().replaceAll(","," ")

console.log(newTitle);