
console.log("TESTING")



fetch('http://localhost:3000/planets')
.then(response=> response.json())
.then(data => console.log(data))







