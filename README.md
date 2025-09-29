# 🎬 Movie DB

**TMDB API ile veri çekme ve listeleme uygulaması.** Proje, popüler ve en çok oy alan filmleri görüntülemektedir.

**A web app for fetching and displaying movies from TMDB API.** The project showcases popular and top-rated movies.

---

## 🚀 Quick Links / Hızlı Bağlantılar

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TMDB API](https://img.shields.io/badge/TMDB-01D277?style=for-the-badge)](https://developer.themoviedb.org/docs/getting-started)
[![Live Demo](https://img.shields.io/badge/Live-Demo-FF6F61?style=for-the-badge)](https://fetch-project-six.vercel.app/)

---

## ✨ Features / Özellikler

| Icon | Feature (EN) | Özellik (TR) |
| :---: | :--- | :--- |
| 📡 | **API Data Fetching** | TMDB API üzerinden film verilerini **fetch** etme. |
| 🍿 | **Movie Listings** | Popüler ve en çok oy alan filmleri listeleme. |
| 🏷️ | **Category Filtering** | Kategori bazlı film **filtreleme**. |
| 🛠️ | **Modern Stack** | React + Next.js + TailwindCSS ile oluşturulmuştur. |

---

## 🛠️ Technologies / Teknolojiler

Bu proje, modern ve tip güvenli bir deneyim sunmak için aşağıdaki araçlarla inşa edilmiştir:

This project is built with the following tools to deliver a modern and type-safe experience:

| Icon | Technology / Teknoloji | Role / Görev (TR) | Role / Görev (EN) |
| :---: | :--- | :--- | :--- |
| ⚛️ | **Next.js 15 & React 18** | Uygulamanın temel iskeleti ve arayüz yapısı. | The core framework for building the application structure and UI. |
| 💨 | **TailwindCSS** | Hızlı ve responsive tasarım için utility-first CSS. | A utility-first CSS framework for fast and responsive design. |
| 📜 | **TypeScript** | Daha güvenli ve ölçeklenebilir kod yazımı için tip kontrolü. | Type checking for safer and more scalable code development. |
| 🎬 | **TMDB API** | Film verilerinin (isim, poster, puan vb.) alındığı harici kaynak. | The external source for fetching movie data (titles, posters, ratings, etc.). |

---

## ⚡ Setup / Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın / Clone the repository:**
    ```bash
    git clone [https://github.com/cloynet/moviedb-fetch.git](https://github.com/cloynet/moviedb-fetch.git)
    cd moviedb-fetch
    ```

2.  **Bağımlılıkları Yükleyin / Install dependencies:**
    ```bash
    npm install
    # veya / or
    yarn install
    ```

3.  **Geliştirme Sunucusunu Başlatma / Start the Development Server:**
    ```bash
    npm run dev
    # veya / or
    yarn dev
    ```
    Tarayıcınızda görüntülemek için http://localhost:3000 adresini açın. / Open http://localhost:3000 to view it in your browser.

---

## 🗺️ Usage / Kullanım

| Rota / Route | Açıklama / Description |
| :--- | :--- |
| `/` | **Ana Sayfa**; popüler ve en çok oy alan filmlerin listesi. / **Homepage**; listing popular and top-rated movies. |
| `/category/:id` | Seçilen kategori ID'sine göre **filtrelenmiş** film listesi. / Movies **filtered** by the selected category ID. |

---

## 🔗 Live Demo & Repository

* **Canlı Demo / Live Demo:** [https://fetch-project-six.vercel.app/](https://fetch-project-six.vercel.app/)
* **GitHub Deposu / GitHub Repository:** [https://github.com/cloynet/fetchProject/tree/main](https://github.com/cloynet/fetchProject/tree/main)
* **TMDB API Belgeleri / TMDB API Docs:** [https://developer.themoviedb.org/docs/getting-started](https://developer.themoviedb.org/docs/getting-started)
