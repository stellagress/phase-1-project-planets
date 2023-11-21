
// Improved Version: 

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

            //Add ol element to the DOM:
            mainPlanetList.appendChild(name)
            firstList.appendChild(mainPlanetList)


            // Create planet elements of planets' info (unordered list):
            const planetList = document.createElement("li")
            const planetName = document.createElement("h3")
            const planetSize = document.createElement("h4")
            const planetColor = document.createElement("h4")
            const planetTemp = document.createElement("h4")
            const planetImg = document.createElement("img")
            const planetCuriosity = document.createElement("button")


            // Set values of unordered list elements: 
            planetName.textContent = planet.name
            planetSize.textContent = `Size: ${planet.size}`           
            planetColor.textContent = `Predominant color: ${planet.predominantColor}`
            planetTemp.textContent = `Average temperature: ${planet.averageTemperature}`
            planetImg.src = planet.image
            planetCuriosity.textContent = `Curiosity`
            

            // Add ul elements to the DOM:
            planetList.append(planetName, planetSize, planetColor, planetTemp, planetImg, planetCuriosity)
            allPlanets.appendChild(planetList)
            

       
            //first eventListener -> MouseOver on ordered list elements:
            firstList.querySelectorAll("h3").forEach(name => {
                name.addEventListener('mouseover', e => {
                    e.target.style.fontSize = "32px"
                })
            })

            //second eventListener -> MouseOut on ordered list elements:
            firstList.querySelectorAll("h3").forEach(name=>{
                name.addEventListener('mouseout', e=> {
                    e.target.style.fontSize= "24px"
                })
            })

            //third eventListener -> click on ordered list elements:
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

            

            // fourth eventListener -> curiosity button functionality on unordered list of elements:
            let isCuriosityVisible = false;
            let curiosityParagraph;

            planetCuriosity.addEventListener("click", () => {
                const message = planet.curiosity;

                // Check if the text is currently visible
                if (isCuriosityVisible) {
                    // If visible, hide the text by removing it
                    if (curiosityParagraph) {
                        curiosityParagraph.remove();
                    }

                    // Update the flag
                    isCuriosityVisible = false;
                } else {
                    // If not visible, create and display the text
                    curiosityParagraph = document.createElement("p");
                    curiosityParagraph.textContent = message;

                    planetList.append(curiosityParagraph);

                    // Update the flag
                    isCuriosityVisible = true;
                }
            });








        })
    })



   
    

    // Original Version: 


    // const firstList = document.querySelector("ol#mainPlanetList")
    // const allPlanets = document.querySelector("ul#planetList")
    
    
    // fetch('http://localhost:3000/planets')
    //     .then(response=> response.json())
    //     .then(planets =>{
    //         planets.forEach(planet => {
               
    //             //Create planet elements of main top list (ordered list):
    //             const mainPlanetList = document.createElement("li")
    //             const name = document.createElement("h3")
    
    //             // Set value of ordered list elements: 
    //             name.textContent = planet.name
    
    //             //Add ol element to the DOM:
    //             mainPlanetList.appendChild(name)
    //             firstList.appendChild(mainPlanetList)
    
    
    //             // Create planet elements of planets' info (unordered list):
    //             const planetList = document.createElement("li")
    //             const planetName = document.createElement("h3")
    //             const planetSize = document.createElement("h4")
    //             const planetColor = document.createElement("h4")
    //             const planetTemp = document.createElement("h4")
    //             const planetImg = document.createElement("img")
    //             const planetCuriosity = document.createElement("button")
    
    
    //             // Set values of unordered list elements: 
    //             planetName.textContent = planet.name
    //             planetSize.textContent = `Size: ${planet.size}`           
    //             planetColor.textContent = `Predominant color: ${planet.predominantColor}`
    //             planetTemp.textContent = `Average temperature: ${planet.averageTemperature}`
    //             planetImg.src = planet.image
    //             planetCuriosity.textContent = `Curiosity`
                
    
    //             // Add ul elements to the DOM:
    //             planetList.append(planetName, planetSize, planetColor, planetTemp, planetImg, planetCuriosity)
    //             allPlanets.appendChild(planetList)
                
    
           
    //             //first eventListener -> MouseOver on ordered list elements:
    //             firstList.querySelectorAll("h3").forEach(name => {
    //                 name.addEventListener('mouseover', e => {
    //                     e.target.style.fontSize = "32px"
    //                 })
    //             })
    
    //             //second eventListener -> MouseOut on ordered list elements:
    //             firstList.querySelectorAll("h3").forEach(name=>{
    //                 name.addEventListener('mouseout', e=> {
    //                     e.target.style.fontSize= "24px"
    //                 })
    //             })
    
    //             //third eventListener -> click on ordered list elements:
    //             firstList.querySelectorAll("h3").forEach(name=>{
    //                 name.addEventListener('click', e=>{
    //                     const planetNameTex = e.target.textContent
    //                     allPlanets.querySelectorAll("h3").forEach(planet =>{
    //                         if(planet.textContent === planetNameTex){
    //                             planet.scrollIntoView({behavior : "smooth"})
    //                         }
    //                     })
    //                 })
    //             })
    
                
    
    //             // fourth eventListener -> curiosity button functionality on unordered list of elements:
    //             planetCuriosity.addEventListener("click", () => {
    //                 const message = planet.curiosity
    //                 alert(message)
    //             })
    
    
    
    //         })
    //     })




