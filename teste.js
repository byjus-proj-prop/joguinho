function ame(){
    var inpi = document.getElementById("jotaro").value;
    localStorage.setItem("vaIn", inpi);
}
function nam() {
    document.getElementById("dio").textContent = document.getElementById("jotaro").value
    document.getElementById("dio").textContent = localStorage.vaIn
}
