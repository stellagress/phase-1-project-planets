




fetch('http://localhost:3000/planets')
    .then(response=> response.json())
    .then(planets =>{
        const firstList = document.querySelector("ol#mainPlanetList")
        const allPlanets = document.querySelector("ul#planetList")
        planets.forEach(planet => {
           
            //Ordered List of planets: 
            const mainPlanetList = document.createElement("li")
            const name = document.createElement("h3")
            name.textContent = planet.name
            mainPlanetList.appendChild(name)

            firstList.appendChild(mainPlanetList)
            
            //Unordered list with respective dersired information
            
            const planetName = document.createElement("h3")
            planetName.textContent = planet.name

            const planetSize = document.createElement("h4")
            planetSize.textContent = `Size: ${planet.size}`

            const planetColor = document.createElement("h4")
            planetColor.textContent = `Predominant color: ${planet.predominantColor}`

            const planetTemp = document.createElement("h4")
            planetTemp.textContent = `Average temperature: ${planet.averageTemperature}`

            
            const planetList = document.createElement("li")
            planetList.append(planetName, planetSize, planetColor, planetTemp)
           
            allPlanets.appendChild(planetList)

       
            //first eventListener -> MouseOver:
            firstList.querySelectorAll("h3").forEach(name => {
                name.addEventListener('mouseover', e => {
                    e.target.style.fontSize = "24px"
                })
            })

            //second eventListener -> MouseOut:
            firstList.querySelectorAll("h3").forEach(name=>{
                name.addEventListener('mouseout', e=> {
                    e.target.style.fontSize= "16px"
                })
            })
         

        })
    })



    //let olPlanets = document.querySelector("ol#mainPlanetList")
    // firstList.addEventListener('mouseover', e=> {
    //     e.preventDefault()
    //     console.log(e)})

    








