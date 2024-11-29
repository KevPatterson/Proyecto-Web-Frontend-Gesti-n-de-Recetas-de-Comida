var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput"),
    recName = document.getElementById("name")
    ingredientes =  document.getElementById("ingredientes"),
    preparacion = document.getElementByIdr("preparacion"),
    time_prep = document.getElementById("time_prep"),
    categoria = document.getElementById("categoria"),
    submit = document.getElementById("submit"),
    cant_porc = document.getElementById("cant_porc"),
    dificultad = document.getElementById("dificultad"),
    submitBtn  = document.getElementById(".submit"),
    recetaInfo = document.getElementById("data"),
    userForm =  document.getElementById("userForm")

    modalTittle = document.querySelector("#userForm .modal-tittle")

let getData = localStorage.getItem('recetaProfile') ? JSON.parse(localStorage.getItem('recetaProfile')) : []

let isEdit = false, editId
showInfo()

file.onchange  = function(){
    if(file.files[0].size < 1000000){
        var fileReader  = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }
        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("Este archivo es demasiado largo!")
    }
}

function showInfo(){
    getData.forEach((element, index) => {
        let createElement = `<tr class = "recetaDetalles"
        <td>${index+1}</td>
        <td><img src="${element.picture}"  alt=""> width="50" heigth="50"></td>
        <td>${element.recName}</td>
        <td>${element.recetaIngredientes}</td>
        <td>${element.recetaPrep}</td>
        <td>${element.recetaTime_prep}</td>
        <td>${element.recetaCategoria}</td>
        <td>${element.recetaCant_porc}</td>
        <td>${element.recetaDificultad}</td>

        <td>
            <button class="btn btn-success" onclick="readInfo('${element.picture}', '${element.recName}' , 
            '${element.recetaIngredientes}', '${element.recetaPrep}', '${element.recetaTime_prep}', '${element.recetaCategoria}', 
            '${element.recetaCant_porc}', '${element.recetaCant_porc}', '${element.recetaDificultad}')" data-bs-toggle="modal" 
            data-bs-target="#readData"><i class="fa-solid fa-eye"></i></button>
            
            <button class="btn btn-primary" onclick="editInfo(${index}, '${element.picture}', '${element.recName}' , 
            '${element.recetaIngredientes}', '${element.recetaPrep}', '${element.recetaTime_prep}', '${element.recetaCategoria}', 
            '${element.recetaCant_porc}', '${element.recetaCant_porc}', '${element.recetaDificultad}')" data-bs-toggle="modal" 
            data-bs-target="#userForm"><i class="fa-solid fa-pen-to-square"></i></button>
            
            <button class="btn btn-danger" onclick="deleteInfo(${index})><i class="fa-solid fa-trash-can"></i></button>
        </td>
        </tr>`

        recetaInfo.innerHTML +=  createElement
    })
}

function deleteInfo(index){
    if(confirm("¿Estás seguro de eliminar la receta?")){
        getData.splice(index, 1)
        localStorage.setItem("")
    }
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const information = {
        picture: imgInput.src === undefined ? "/images/profile.png" : imgInput.src,
        recetaName: recName.value,
        recetaIngredientes: ingredientes.value,
        recetaPrep: preparacion.value,
        recetaTime_prep:  time_prep.value,
        recetaCategoria: categoria.value,
        recetaCant_porc: cant_porc.value,
        recetaDificultad: dificultad.value,
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('recetaProfile', JSON.stringify(getData))

    submitBtn.innerText  = "Submit"
    modalTittle.innerHTML =  "Agregar una Nueva Receta"

    showInfo()

    form.reset()
    imgInput.src = "/images/profile.png"
    modal.style.display = "none"
    document.querySelector(".modal-backdrop").remove()

})