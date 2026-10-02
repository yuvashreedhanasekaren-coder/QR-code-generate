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

    try {
        const validUrl = new URL(url);

        if (!["http:", "https:"].includes(validUrl.protocol)) {
            throw new Error("Invalid protocol");
        }

        new QRCode(qrCode, {
            text: validUrl.href,
            width: 200,
            height: 200
        });

    } catch (error) {
        alert("Please enter a valid URL.");
    }
});