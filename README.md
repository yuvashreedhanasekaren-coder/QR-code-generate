# 🔗 QR Code Generator

A simple, fast, and user-friendly web application that converts **any valid URL into a QR code** instantly.

Users can enter a website link, generate its QR code, download the QR code as a PNG image, and clear the current result.

---

## ✨ Features

- 🔗 Generate QR codes from any valid URL
- 🌐 Supports both `http://` and `https://` URLs
- ✅ Validates the entered URL before generating
- 📱 Generates a clear and scannable QR code
- 💾 Download the generated QR code as a PNG image
- 🏷️ Automatically creates a meaningful filename using the website domain
- 🎉 Shows a success notification after QR generation
- 📥 Shows a download-success notification after downloading
- 🧹 Clear the entered URL and generated QR code
- ⌨️ Press `Enter` to generate the QR code
- 📱 Responsive design for different screen sizes
- 🎨 Clean and modern user interface
- ⚡ Lightweight and fast
- 🆓 Free to use

---

## 🖥️ Project Preview

The application provides a clean interface where users can enter any URL and instantly generate its QR code.

### 🔹 Main Interface

The user enters a website URL into the input field.

### 🔹 QR Code Generation

After clicking **Generate QR Code**, the application validates the URL and creates the QR code.

### 🔹 Download

The generated QR code can be downloaded as a PNG image using the **Download QR Code** button.

### 🔹 Clear

The **Clear** button removes the entered URL and generated QR code.

---

## 🚀 How It Works

The project follows a simple client-side workflow:

```text
👤 User
   │
   ▼
🔗 Enter URL
   │
   ▼
✅ URL Validation
   │
   ▼
⚙️ QR Code Generation
   │
   ▼
🖼️ QR Code Display
   │
   ├───────────────┐
   ▼               ▼
💾 Download      🧹 Clear
   │
   ▼
📥 PNG File
````

---

## 🧠 Application Flow

### 1️⃣ Enter URL

The user enters a website URL such as:

```text
https://example.com
```

---

### 2️⃣ Validate URL

JavaScript uses the built-in `URL` object to check whether the entered value is a valid URL.

The application accepts:

```text
http://
https://
```

Other protocols are rejected.

---

### 3️⃣ Generate QR Code

After successful validation, the application uses the **QRCode.js** library to generate the QR code.

The URL is passed directly to the QR code generator.

---

### 4️⃣ Display QR Code

The generated QR code is displayed dynamically inside the QR code container.

The QR code is generated at:

```text
200 × 200 pixels
```

---

### 5️⃣ Download QR Code

When the user clicks **Download QR Code**, the application retrieves the generated QR image and creates a downloadable PNG file.

For example:

```text
QR-Code-chatgpt.com.png
```

The filename is generated automatically from the website hostname.

---

### 6️⃣ Download Notification

After the download action, the application displays:

```text
✓ QR code downloaded successfully.
```

This notification appears above the download button.

---

### 7️⃣ Clear

The **Clear** button removes:

* 🔗 Entered URL
* 🖼️ Generated QR code
* 🎉 Success messages
* 📥 Download notification

---

## 🛠️ Technologies Used

| Technology    | Purpose                                                            |
| ------------- | ------------------------------------------------------------------ |
| 🌐 HTML5      | Creates the structure of the application                           |
| 🎨 CSS3       | Handles styling, layout, responsive design, and animations         |
| ⚙️ JavaScript | Handles validation, QR generation, download, and user interactions |
| 📦 QRCode.js  | Generates QR codes                                                 |
| 🌍 CDN        | Loads the QRCode.js library                                        |

---

## 📚 Libraries & APIs

### 🔳 QRCode.js

The project uses **QRCode.js** to generate QR codes directly in the browser.

CDN used:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
```

QRCode.js handles the actual QR code generation while JavaScript controls the application logic.

---

## 📁 Project Structure

```text
QR-code-generate/
│
├── 📄 index.html
├── 🎨 style.css
├── ⚙️ script.js
└── 📖 README.md
```

---

## 📄 File Explanation

### `index.html`

Responsible for the structure of the application.

It contains:

* 🏷️ Application title
* 🔗 URL input field
* ⚙️ Generate button
* 🖼️ QR code container
* 💾 Download button
* 🧹 Clear button
* 🎉 Success notifications
* 📱 Responsive viewport configuration

---

### `style.css`

Responsible for the complete visual design.

It handles:

* 🎨 Gradient background
* 🃏 Card layout
* 🔘 Button styling
* 🔗 Input styling
* 🖼️ QR code presentation
* 🎉 Notification design
* 📱 Responsive layout
* ✨ Hover effects
* 📐 Spacing and alignment

---

### `script.js`

Contains the main application logic.

It handles:

* 🔗 Reading the URL
* ✅ URL validation
* 🔳 QR code generation
* 💾 QR code downloading
* 🏷️ Automatic filename generation
* 🎉 Success notifications
* 🧹 Clearing the application
* ⌨️ Enter-key functionality

---

## 🔐 URL Validation

The application checks whether the entered URL uses an accepted protocol.

```javascript
if (!["http:", "https:"].includes(validUrl.protocol)) {
    throw new Error("Invalid URL");
}
```

This prevents unsupported protocols from being processed.

---

## 💾 Download File Naming

The application extracts the hostname from the entered URL.

For example:

```text
https://www.example.com
```

becomes:

```text
example.com
```

The generated file is then named:

```text
QR-Code-example.com.png
```

This makes downloaded QR codes easier to identify.

---

## 🎯 User Experience

The project focuses on keeping the interface simple and easy to use.

### 👤 User actions

```text
Enter URL
   ↓
Click Generate
   ↓
QR Code appears
   ↓
Click Download
   ↓
PNG file downloaded
```

The user does not need to install additional software or manually create a QR code.

---

## 📱 Responsive Design

The application includes responsive CSS rules for smaller screens.

The layout automatically adjusts for mobile devices by:

* 📱 Reducing card padding
* 🔤 Adjusting heading size
* 📐 Changing button layout
* ↔️ Making action buttons full width

---

## ⚡ Performance

This project is lightweight because the QR generation happens directly in the browser.

There is:

* ❌ No backend server
* ❌ No database
* ❌ No user account system
* ❌ No API key requirement
* ❌ No external backend processing

The application only needs the QRCode.js library loaded through its CDN.

---

## 🔒 Privacy

The entered URL is processed in the browser for QR generation.

The project does not require:

* 👤 User accounts
* 🔑 Passwords
* 🗄️ Database storage
* 🔐 Personal information

---

## 💻 How to Run

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yuvashreedhanasekaren-coder/QR-code-generate.git
```

### 2️⃣ Open the project

```bash
cd QR-code-generate
```

### 3️⃣ Run the application

Because this is a client-side web project, you can simply open:

```text
index.html
```

in a web browser.

You can also use **VS Code Live Server** for local development.

---

## 🧪 Example

Enter:

```text
https://chatgpt.com/
```

Click:

```text
Generate QR Code
```

The application generates a QR code representing:

```text
https://chatgpt.com/
```

Then click:

```text
Download QR Code
```

The QR code will be downloaded as a PNG image.

---

## 📌 Use Cases

This project can be used to create QR codes for:

* 🌐 Personal websites
* 💼 Portfolio websites
* 📄 Online resumes
* 📱 Social media profiles
* 🛍️ Business websites
* 🏪 Product pages
* 🎓 College projects
* 📚 Educational resources
* 🔗 Any public web URL

---

## 🌟 Project Highlights

### 🔗 Any URL

Unlike a portfolio-specific QR generator, this project can generate QR codes for **any valid website URL**.

### ⚡ Instant Generation

QR codes are generated directly in the browser without requiring a backend server.

### 💾 Easy Download

Users can download the generated QR code as a PNG image.

### 🎨 Simple Interface

The application uses a clean and minimal interface so that users can generate QR codes without unnecessary steps.

---

## 🔮 Future Improvements

Possible future enhancements include:

* 🎨 Custom QR code colors
* 🖼️ Add logo/image to QR code
* 📐 Custom QR code sizes
* 🌙 Dark mode
* 📋 Copy generated URL
* 📋 Copy QR code
* 📊 QR scan analytics
* 📜 QR generation history
* 📱 PWA support
* 🎨 Multiple QR code styles
* 📥 Download in additional formats such as SVG
* 🔗 Support for text-based QR codes
* 📇 Contact/vCard QR generation
* 📶 Wi-Fi QR generation

---

## 📈 Development Progress

| Step                     | Status      |
| ------------------------ | ----------- |
| 📁 Project setup         | ✅ Completed |
| 🏗️ HTML structure       | ✅ Completed |
| 🎨 Initial styling       | ✅ Completed |
| 🔳 QR code generation    | ✅ Completed |
| ✅ URL validation         | ✅ Completed |
| 💾 QR code download      | ✅ Completed |
| 🏷️ Automatic filename   | ✅ Completed |
| 🧹 Clear functionality   | ✅ Completed |
| ⌨️ Enter-key support     | ✅ Completed |
| 🎉 Success notifications | ✅ Completed |
| 📱 Responsive design     | ✅ Completed |
| 📖 README documentation  | 🔄 Current  |
| 🧪 Final testing         | ⏳ Next      |

---

## 🧩 Project Type

```text
Frontend Web Application
```

### Architecture

```text
HTML
 │
 ├── Structure
 │
 ▼
CSS
 │
 ├── Design & Responsive Layout
 │
 ▼
JavaScript
 │
 ├── URL Validation
 ├── QR Generation
 ├── Download
 ├── Notifications
 └── Clear
 │
 ▼
QRCode.js
 │
 └── QR Code Generation
```

---

## 📊 Key Characteristics

```text
⚡ Fast
🎨 Clean UI
🔗 Any URL
📱 Responsive
💾 Downloadable
🔒 Simple & Privacy-Friendly
🆓 Free
🌐 Browser-Based
```

---

### 🔗 GitHub

```text
https://github.com/yuvashreedhanasekaren-coder
```

---

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.

---

## 📜 License

This project is created for learning, development, and educational purposes.
