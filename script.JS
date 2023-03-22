const api = "https://chart.googleapis.com/chart?cht=qr&chs=&chl="
const text = document.querySelector("[user-dataInput]");
const qrCode = document.querySelector("[qrCode]");

function genQR(){
    if(text.value.length > 0){
        qrCode.src = `https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${text.value}`;
        qrCode.classList.add("active");
    }else{
        text.classList.add("error");
        qrCode.classList.remove("active");
        setTimeout(() => {text.classList.remove("error");},2000);    
    }
}
