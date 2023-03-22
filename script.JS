const api = "https://chart.googleapis.com/chart?cht=qr&chs=&chl="
const text = document.querySelector("[user-dataInput]");
const qrCode = document.querySelector("[qrCode]");
const loader = document.querySelector("[loadingScreen]");

async function genQR(){
    if(text.value.length > 0){
        loader.classList.add("active");
        qrCode.classList.remove("active");
        const response = await fetch(`https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=${text.value}`);
        qrCode.src = response.url;
        loader.classList.remove("active");
        qrCode.classList.add("active");
    }else{
        text.classList.add("error");
        qrCode.classList.remove("active");
        setTimeout(() => {text.classList.remove("error");},2000);    
    }
}
