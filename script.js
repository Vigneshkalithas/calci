let outputView = document.getElementById("output-calci");
function display(num){
    outputView.value += num; 
}
function equalto(){
    try{
        outputView.value = eval(outputView.value);
    }
    catch(eror){
        alert("Only numbers are allowed")
    }
}
function Clear(){
    outputView.value = "";
}
function del(){
    outputView.value = outputView.value.slice(0,-1);
}