const portfolioUrl = document.getElementById("portfolioUrl");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");
const qrCode = document.getElementById("qrCode");
const message = document.getElementById("message");

generateBtn.addEventListener("click", () => {
    const url = portfolioUrl.value.trim();

    qrCode.innerHTML = "";
    downloadBtn.style.display = "none";
    clearBtn.style.display = "none";

    message.textContent = "";
    message.style.color = "";

    if (!url) {
        message.textContent = "Please enter a URL.";
        message.style.color = "#dc2626";
        return;
    }

    try {
        const validUrl = new URL(url);

        if (!["http:", "https:"].includes(validUrl.protocol)) {
            throw new Error("Invalid URL");
        }

        new QRCode(qrCode, {
            text: validUrl.href,
            width: 200,
            height: 200
        });

        downloadBtn.style.display = "inline-block";
        clearBtn.style.display = "inline-block";

        message.textContent = "QR code generated successfully.";
        message.style.color = "#16a34a";

    } catch (error) {
        message.textContent = "Please enter a valid URL.";
        message.style.color = "#dc2626";
    }
});

downloadBtn.addEventListener("click", () => {
    const qrImage = qrCode.querySelector("img") ||
                    qrCode.querySelector("canvas");

    if (!qrImage) {
        message.textContent = "Please generate a QR code first.";
        message.style.color = "#dc2626";
        return;
    }

    const link = document.createElement("a");

    link.href = qrImage.tagName === "CANVAS"
        ? qrImage.toDataURL("image/png")
        : qrImage.src;

    link.download = "QR-Code.png";
    link.click();
});

clearBtn.addEventListener("click", () => {
    portfolioUrl.value = "";
    qrCode.innerHTML = "";
    downloadBtn.style.display = "none";
    clearBtn.style.display = "none";
    message.textContent = "";
});

portfolioUrl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateBtn.click();
    }
});