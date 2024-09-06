document.getElementById('btn').addEventListener('click', function() {
    const details = {
      currentLocation: document.getElementById('currentLocation').innerText,
      destination: document.getElementById('destination').innerText,
      travelDate: document.getElementById('travelDate').innerText,
      passengerCount: document.getElementById('passengerCount').innerText,
      ticketTypes: document.getElementById('ticketTypes').innerText
    };
  
    // const uniqueId = uuid.v4(); // Generate a unique UUID for each user session
    const encodedDetails = encodeURIComponent(JSON.stringify(details));
    // const url = `https://travelhubng.netlify.app/travelDetails/${uniqueId}.html?data=${encodedDetails}`;
  
    // Assuming QRCode library is included in your project
    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 128,
      height: 128,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });
  