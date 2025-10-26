let btn = document.querySelector("#btn");
let finleInp = document.querySelector("#fileInp");


btn.addEventListener("click", function(){
    finleInp.click();
});

finleInp.addEventListener("change", function(dets){
    const file = dets.target.files[0];

    if(file){
        btn.textContent = file.name;
    }
});