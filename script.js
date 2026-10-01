const portfolioUrl = document.getElementById("portfolioUrl");
const generateBtn = document.getElementById("generateBtn");
const qrCode = document.getElementById("qrCode");

generateBtn.addEventListener("click", () => {
    const url = portfolioUrl.value.trim();

    qrCode.innerHTML = "";

    if (!url) {
        alert("Please enter a URL.");
        return;
    }

    new QRCode(qrCode, {
        text: url,
        width: 200,
        height: 200
    });
});