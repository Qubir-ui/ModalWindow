document.addEventListener('DOMContentLoaded', function(){
	const inputFile = document.querySelector(".input-file")

    inputFile.addEventListener("change", ()=>{
        let fileName = document.querySelector("#file").files[0].name
        let text = document.querySelector(".input-text")
        text.innerHTML = fileName
    })
})

