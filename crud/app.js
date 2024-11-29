var form = document.getElementById("myForm"),
    imgInput = document.querySelector(".img"),
    file = document.getElementById("imgInput")
    nombreReceta = document.getElementById("nombreReceta"),
    ingredt = document.getElementById("ingredt"),
    prep = document.getElementById("prep"),
    tPrep = document.getElementById("tPrep"),
    porc = document.getElementById("porc"),
    cat = document.getElementById("cat"),
    dif = document.getElementById("dif"),
    submitBtn = document.querySelector(".submit"),
    rectInfo = document.getElementById("data"),
    modal = document.getElementById("receipeForm"),
    modalTitle = document.querySelector("#receipeForm .modal-title"),
    newReceipeBtn =  document.querySelector(".newReceipe")


let getData = localStorage.getItem('rectProfile') ? JSON.parse(localStorage.getItem('rectProfile')) : []

let isEdit = false , editId
showInfo()

newReceipeBtn.addEventListener('click',()=>{
    submitBtn.innerText = "Agregar Receta",
    modalTitle.innerText = "Rellena los Datos de la Receta"
    isEdit = false
    imgInput.src = "img/profile.png"
    form.reset()
})

file.onchange = function(){
    if(file.files[0].size < 1000000){//1MB = 1000000
        var fileReader = new FileReader();

        fileReader.onload = function(e){
            imgUrl = e.target.result
            imgInput.src = imgUrl
        }
        
        fileReader.readAsDataURL(file.files[0])
    }
    else{
        alert("Este archivo es demasiado grande")
    }
}

function showInfo(){
    document.querySelectorAll('.recetasDetails').forEach(info => info.remove())
    getData.forEach((element,index)=>{
        let createElement =  `<tr class = "recetasDetails">
            <td>${element.nR}</td>
            <td><img src="${element.picture}" alt="" width="50" height="50"></td>
            <td>${element.ing}</td>
            <td>${element.prepa}</td>
            <td>${element.tmpP}</td>
            <td>${element.porci}</td>
            <td>${element.cata}</td>
            <td>${element.difi}</td>
            <td>
                <button class="btn btn-success" onclick = "readInfo('${element.picture}', '${element.nR}', '${element.ing}', '${element.prepa}', '${element.tmpP}', '${element.porci}', '${element.cata}', '${element.difi}' )"data-bs-toggle="modal" data-bs-target="#readData"><i class="bi bi-eye"></i></button>
                <button class="btn btn-primary" onclick = "editInfo(${index},'${element.picture}', '${element.nR}', '${element.ing}', '${element.prepa}','${element.tmpP}','${element.porci}','${element.cata}','${element.difi}' )" data-bs-toggle="modal" data-bs-target="#receipeForm"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-danger"  onclick = "deleteInfo(${index})"><i class="bi bi-trash"></i></button>

            </td>
        </tr>`

        rectInfo.innerHTML += createElement
        
    })
    
}  
showInfo()

function readInfo(picture,nR,ing,prepa,tmpP,porci,cata,difi){
    document.querySelector('.showImg').src = picture,
    document.querySelector('#shownombreReceta').value = nR
    document.querySelector('#showingredt').value = ing
    document.querySelector('#showprep').value = prepa
    document.querySelector('#showtPrep').value = tmpP
    document.querySelector('#showporc').value = porci
    document.querySelector('#showcat').value = cata
    document.querySelector('#showdif').value = difi
}

function editInfo(index,picture,nR,ing,prepa,tmpP,porci,cata,difi){
    isEdit = true
    editId = index
    imgInput.src = picture
    nombreReceta.value = nR
    ingredt.value = ing
    prep.value = prepa
    tPrep.value = tmpP
    porc.value = porci
    cat.value = cata
    dif.value = difi

    submitBtn.innerText = "Editar"
    modalTitle.innerText = "Editar Receta"
}

function deleteInfo(index){
    if(confirm("Estas seguro de que deseas eliminarla ??")){
        getData.splice(index,1)
        localStorage.setItem('rectProfile', JSON.stringify(getData))
        showInfo()
    }
}

form.addEventListener('submit' , (e)=>{
    e.preventDefault()

    const information = {
        picture: imgInput.src == undefined ? "img/profile.png" : imgInput.src,
        nR: nombreReceta.value,
        ing: ingredt.value,
        prepa: prep.value,
        tmpP: tPrep.value,
        porci: porc.value,
        cata: cat.value,
        difi: dif.value
    }

    if(!isEdit){
        getData.push(information)
    }
    else{
        isEdit = false
        getData[editId] = information
    }

    localStorage.setItem('rectProfile', JSON.stringify(getData ))

    submitBtn.innerText = "Agregar Receta"
    modalTitle.innerHTML = "Rellena los datos de la receta"

    showInfo()

    form.reset()

    imgInput.src = "img/profile.png"
    modal.style.display = "none"
    document.querySelector(".modal-backdrop").remove()
})