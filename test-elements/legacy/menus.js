
const body = " Register for the 2024 Human Cell Atlas General Meeting on September 29 - 30 in Milan Italy. You can register here (https://events.humancellatlas.org/2024GM) . If you have any questions, email meetings@humancellatlas.org."

const subject = "Register for the 2024 Human Cell Atlas General Meeting in Milan, Italy"
const newSubject = subject.replaceAll(" ", "%20")
const newBody =body.replaceAll(" ", "%20")

console.log(newSubject)