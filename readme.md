# 🌸 LyfeCycle App

**LyfeCycle** is a cross-platform fertility and reproductive health tracking app built in React Native. It connects to a wearable fertility ring via **Bluetooth Low Energy (BLE)** to collect **Basal Body Temperature (BBT)** readings every 12 hours. The app analyzes BBT fluctuations to identify cycle phases, estimate ovulation, and deliver real-time insights — securely and accessibly.

---

## 🎬 Live Demo

[![Watch the demo](./screenshots/thumbnail.png)](https://youtube.com/shorts/P9dtEDqI3YQ?feature=share)


## 📱 Features

- 🔐 Firebase Authentication (Login, Sign-Up, Logout)
- 📊 BBT-based cycle phase detection algorithm
- 💡 Ovulation prediction based on temperature rise patterns
- 📡 BLE pairing and communication with the LifeCycle Ring
- 🔁 Auto-updates with data every 12 hours
- 🧠 Symptom logging for pattern recognition and prediction
- 📈 Cycle history with temperature logs
- ⚙️ Customizable settings (notifications, privacy, theme)
- 🧩 React Native + Expo (Android/iOS support)

---

## 🧪 Technologies Used

- **React Native + Expo**
- **Firebase Authentication**
- **Bluetooth Low Energy (BLE)**
- **Expo Notifications**
- **FlatList, SafeAreaView, ScrollView, and React Navigation**
- **Custom BBT phase-detection logic**

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/LyfeCycle.git
cd LyfeCycle
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App
```bash
npx expo start
```
Use the QR code in Expo Go (on your mobile device) to test the app live.

## 📡 BLE Functionality

The app communicates with the LifeCycle Ring using **Bluetooth Low Energy (BLE)**, advertising connection availability and pulling sensor data every 12 hours.

- ✅ “Pair with LifeCycle Ring” button initiates BLE advertising
- ✅ BBT data is logged and analyzed for cycle insights

---

## 🔐 Firebase Authentication

- Login and registration handled via **Firebase Authentication**
- Tokens used for secure session management
- Includes logout and session expiration logic

---

## 💬 Logging Symptoms

Users can log daily symptoms such as:
- Cramps
- Fatigue
- Food cravings
- Mood swings
- Nausea

> These logs can be used to identify patterns and fuel predictive fertility insights.

---

## 🚀 Roadmap

- [ ] Add cloud sync with Firestore
- [ ] Export PDF cycle reports
- [ ] Real-time chart visualizations (e.g., line graphs of BBT)
- [ ] Period and ovulation predictions using machine learning
- [ ] Dark mode toggle
- [ ] AI-powered fertility tips based on symptoms + BBT

---
