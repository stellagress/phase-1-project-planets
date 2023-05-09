

const firstList = document.querySelector("ol#mainPlanetList")
const allPlanets = document.querySelector("ul#planetList")


fetch('http://localhost:3000/planets')
    .then(response=> response.json())
    .then(planets =>{
        planets.forEach(planet => {
           
            //Create planet elements of main top list (ordered list):
            const mainPlanetList = document.createElement("li")
            const name = document.createElement("h3")

            // Set value of ordered list elements: 
            name.textContent = planet.name


            //Add element to the DOM:
            mainPlanetList.appendChild(name)





            // Create planet elements of planets' info (unordered list):
            const planetList = document.createElement("li")
            const planetName = document.createElement("h3")
            const planetSize = document.createElement("h4")
            const planetColor = document.createElement("h4")
            const planetTemp = document.createElement("h4")
            const planetImg = document.createElement("img")



         


            
            
            

            firstList.appendChild(mainPlanetList)
            

            //Unordered list with respective information
            
            
            planetName.textContent = planet.name

            
            planetSize.textContent = `Size: ${planet.size}`

            
            planetColor.textContent = `Predominant color: ${planet.predominantColor}`

            
            planetTemp.textContent = `Average temperature: ${planet.averageTemperature}`

            
            planetImg.src = planet.image

            
            
            planetList.append(planetName, planetSize, planetColor, planetTemp, planetImg)
           
            allPlanets.appendChild(planetList)

       
            //first eventListener -> MouseOver:
            firstList.querySelectorAll("h3").forEach(name => {
                name.addEventListener('mouseover', e => {
                    e.target.style.fontSize = "32px"
                })
            })

            //second eventListener -> MouseOut:
            firstList.querySelectorAll("h3").forEach(name=>{
                name.addEventListener('mouseout', e=> {
                    e.target.style.fontSize= "24px"
                })
            })

            //thirs eventListener -> click:
            firstList.querySelectorAll("h3").forEach(name=>{
                name.addEventListener('click', e=>{
                    const planetNameTex = e.target.textContent
                    allPlanets.querySelectorAll("h3").forEach(planet =>{
                        if(planet.textContent === planetNameTex){
                            planet.scrollIntoView({behavior : "smooth"})
                        }
                    })
                })
            })
         

        })
    })



   
    








