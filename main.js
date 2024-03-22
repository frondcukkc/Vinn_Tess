function checkHasil(){
    let umurInput = document.getElementById("ceknumber");
    let umur = umurInput.value;
    
    let sekarang = new Date().getFullYear();
    let umurAnda = sekarang - umur;
    
    if (umurAnda >= 70){
        umur = "Kakek lupa umur yaa??"
    } else if(umurAnda >= 40) {
        umur = "Ingt wakk Rambut dah Putihh!!"
    } else if(umurAnda >= 30) {
        umur = "Anak Berapa Bang??"
    } else if(umurAnda >= 17) {
        umur = "Uda Lajang Anak Bapak"
    } else if(umurAnda >= 10) {
        umur = "Sekolah mana Dekk??"
    } else if(umurAnda >= 3) {
        umur = "Bocil Haram!!!"
    } else { 
        umur = "masukkan woii";
    }
    const textInput = document.getElementById("textinput")  
    textInput.innerHTML = (` ${umur}`);

    let hasil = document.getElementById("hasil");
    hasil.value = "Umur anda " + umurAnda + " Tahun ";
    
}

//CEK NUMBER ===>
let cekNumber = document.getElementById("ceknumber")
function checkInput(){
    cekNumber.style.border =""
}
function inputWarnaOut(){
    button1.style.background = "green"
    button1.style.backgroundOpacity = "0.6"
    button1.textContent = "Ayo Klik Cokk!!"
}
