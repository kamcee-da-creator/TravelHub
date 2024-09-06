const btn = document.getElementById("btn");
const qrCode = document.getElementById("qrcode");

const generateQrcode = (e) => {
  // grabbing the details of the client
  const url = document.getElementById("url");
  if (url === 10) {
    console.log(url);
  } else {
    showSpinner();
    setTimeout(() => {
      hidespinner();
    }, 2000);
  }
  //    show spinner While the qr code is being generated
 const createQrcode = (url)=>{
    
 }
  // logic for qr code generation

  // hide spinner
  hideSpinner();
};

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};
const hidespinner = () => {
  document.getElementById("spinner").style.display = "none";
};

btn.addEventListener("click", generateQrcode);
