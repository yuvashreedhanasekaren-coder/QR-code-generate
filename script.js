const portfolioUrl = document.getElementById("portfolioUrl");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const clearBtn = document.getElementById("clearBtn");
const qrCode = document.getElementById("qrCode");
const generateMessage = document.getElementById("generateMessage");
const downloadMessage = document.getElementById("downloadMessage");

generateBtn.addEventListener("click", () => {

    const url = portfolioUrl.value.trim();

    qrCode.innerHTML = "";
    downloadBtn.style.display = "none";
    clearBtn.style.display = "none";
    generateMessage.style.display = "none";
    downloadMessage.style.display = "none";

    if (!url) {

        generateMessage.textContent = "Please enter a URL.";
        generateMessage.style.background = "#fef2f2";
        generateMessage.style.borderColor = "#fecaca";
        generateMessage.style.color = "#dc2626";
        generateMessage.style.display = "block";

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

        generateMessage.textContent = "✓ QR code generated successfully.";
        generateMessage.style.background = "#eff6ff";
        generateMessage.style.borderColor = "#bfdbfe";
        generateMessage.style.color = "#2563eb";
        generateMessage.style.display = "block";

    } catch (error) {
        generateMessage.textContent = "Please enter a valid URL.";
        generateMessage.style.background = "#fef2f2";
        generateMessage.style.borderColor = "#fecaca";
        generateMessage.style.color = "#dc2626";
        generateMessage.style.display = "block";
    }
});

downloadBtn.addEventListener("click", () => {
    const qrImage =
        qrCode.querySelector("img") ||
        qrCode.querySelector("canvas");

    if (!qrImage) {
        return;
    }

    const url = portfolioUrl.value.trim();

    const hostname = new URL(url)
        .hostname
        .replace("www.", "");

    const filename = `QR-Code-${hostname}.png`;
    const link = document.createElement("a");

    link.href =
        qrImage.tagName === "CANVAS"
            ? qrImage.toDataURL("image/png")
            : qrImage.src;

    link.download = filename;
    link.click();

    downloadMessage.textContent =
    "✓ QR code downloaded successfully.";
    downloadMessage.style.background = "#ecfdf5";
    downloadMessage.style.borderColor = "#bbf7d0";
    downloadMessage.style.color = "#15803d";
    downloadMessage.style.display = "block";

    const buttonRect = downloadBtn.getBoundingClientRect();
    const messageWidth = downloadMessage.offsetWidth;
    const messageHeight = downloadMessage.offsetHeight;

    const messageLeft =
        buttonRect.left +
        (buttonRect.width / 2) -
        (messageWidth / 2);

    const messageTop =
        buttonRect.top -
        messageHeight -
        8;

    downloadMessage.style.left = `${messageLeft}px`;
    downloadMessage.style.top = `${messageTop}px`;
});

/* Clear */
clearBtn.addEventListener("click", () => {
    portfolioUrl.value = "";
    qrCode.innerHTML = "";
    downloadBtn.style.display = "none";
    clearBtn.style.display = "none";
    generateMessage.style.display = "none";
    downloadMessage.style.display = "none";
});

portfolioUrl.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        generateBtn.click();
    }
});