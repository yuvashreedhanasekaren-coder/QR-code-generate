const portfolioUrl = document.getElementById("portfolioUrl");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");
const qrCode = document.getElementById("qrCode");

generateBtn.addEventListener("click", () => {
    const url = portfolioUrl.value.trim();

    qrCode.innerHTML = "";
    downloadBtn.style.display = "none";
    clearBtn.style.display = "none";

    if (!url) {
        alert("Please enter a URL.");
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

    } catch (error) {
        alert("Please enter a valid URL.");
    }
});

downloadBtn.addEventListener("click", () => {
    const qrImage = qrCode.querySelector("img") ||
                    qrCode.querySelector("canvas");

    if (!qrImage) {
        alert("Please generate a QR code first.");
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
});

portfolioUrl.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        generateBtn.click();
    }
});