# 🎓 University Search Archive

A sleek, responsive web application designed to fetch and display university data globally. This project serves as a practical demonstration of handling **Asynchronous JavaScript**, **API integration**, and **Dynamic DOM manipulation**.

---

## 🔍 Project Overview
This tool allows users to enter a country name and instantly retrieve a catalog of universities from that region. It interfaces with the HipoLabs API to provide real-time data, including specific regional information like states and provinces.

## 🛠️ Tech Stack
* **Frontend:** HTML5 & CSS3 (featuring Google Fonts `Playfair Display`)
* **Logic:** JavaScript (ES6+)
* **Networking:** [Axios](https://axios-http.com/) for Promise-based HTTP requests
* **Data Source:** [HipoLabs University API](http://universities.hipolabs.com/)

## 🚀 Key Features
* **Async/Await Architecture:** Implements non-blocking code for a smooth user experience.
* **Intelligent Data Handling:** Uses bracket notation to handle hyphenated JSON keys like `state-province`.
* **Conditional Rendering:** Logic included to check for `null` values in the database, ensuring the UI stays clean whether state data is present or not.
* **Error Management:** Robust `try/catch` blocks to prevent application crashes during network interruptions.



## 📋 How to Use
1.  Type a country name (e.g., "India", "United States", "Germany") into the search bar.
2.  Click the **Search** button to execute the "Async Investigation."
3.  The results will populate below with a unique "College #" index and regional details where available.

## 📂 Project Structure
* `index.html`: The structural foundation and UI layout.
* `style.css`: Custom styling and typography.
* `app.js`: The core logic for API calls and DOM manipulation.

---

### 👨‍💻 Developer Notes
This repository is part of a series of projects focusing on mastering **Full Stack Development**. It demonstrates a strong foundation in Frontend API consumption before moving into Backend server architecture.
