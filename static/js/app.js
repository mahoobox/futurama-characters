let url = 'https://api.sampleapis.com/futurama/characters/'
    fetch(url)
        .then(response => response.json())
        .then(data => mostrarData(data))
        .catch(error => console.log(error))
        
    const mostrarData = (data) => {
        console.log(data)

        function individuales(info){
            let parrafo = ''
            for (let m = 0; m<info.length; m++){
                parrafo += `<p>${info[m]}</p>`                
            }
            return(document.getElementById('data').innerHTML = parrafo)
        }

        let body = ''
        for (let i = 0; i<data.length; i++){
            
            body += `<tr>
                <td>${data[i].name.first} ${data[i].name.middle} ${data[i].name.last}</td>
                <td>${data[i].gender}</td>
                <td>${data[i].species}</td>
                <td>${data[i].homePlanet}</td>
                <td>${data[i].occupation}</td>
                <td><img src="${data[i].images.main}"/></td>
                <td>${data[i].sayings}</td>
                <td>
                    <p> ${individuales(data[i].sayings)}</p>
                </td>
            </tr>`                
        }
        document.getElementById('data').innerHTML = body
    }


// let url_individual = 'https://api.sampleapis.com/futurama/characters/1'
//     fetch(url_individual)
//         .then(response => response.json())
//         .then(datos => mostrarDatos(datos))
//         .catch(error => console.log(error))
        
//     const mostrarDatos = (datos) => {
//         let info = datos.sayings
//         //console.log(info)
//         let parrafo = ''
//         for (let m = 0; m<info.length; m++){
//             parrafo += `<p>${info[m]}</p>`                
//         }
//         document.getElementById('frases').innerHTML = parrafo
//     }