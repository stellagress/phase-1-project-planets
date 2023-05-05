
console.log("TESTING")



fetch('http://localhost:3000/planets')
    .then(response=> response.json())
    .then(planets =>{
        const allPlanets = document.querySelector("ul#planetList")
        planets.forEach(planet => {

            const planetName = document.createElement("h3")
            planetName.textContent = planet.name

            const planetSize = document.createElement("h3")
            planetSize.textContent = planet.size

            const planetList = document.createElement("li")
            planetList.append(planetName, planetSize)
            //planetList.appendChild(planetSize)

            allPlanets.appendChild(planetList)

        })
    })







