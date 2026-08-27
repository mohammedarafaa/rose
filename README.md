# Rose — E-commerce Platform

Rose is a full-featured e-commerce storefront built in Angular — product catalog, cart, wishlist, and a complete checkout flow, all in one production-style app.

---

## Motivation

Most Angular tutorials stop at "display some products in a grid." A real store has to handle a lot more: cart state that survives navigation, a checkout flow that doesn't lose your data halfway through, auth that actually guards your routes, and instant feedback so users know their click registered. I built Rose to put all of those pieces together in one place — from RxJS-driven state management to a full authentication and payment flow — the way a production storefront actually has to work, not just the demo-friendly parts.

---

## Features

- **Product Catalog** — Browse and search through products
- **Advanced Search & Filter** — Find products quickly with powerful filters
- **Shopping Cart** — Add, update, and remove items
- **Checkout Flow** — Smooth and secure checkout process
- **Wishlist** — Save favorite products for later
- **User Authentication** — JWT-based secure login system
- **Order Management** — Track orders and view order history
- **Responsive Design** — Optimized for all screen sizes
- **Image Sliders** — Beautiful product showcases with ngx-owl-carousel
- **Real-time Notifications** — User feedback with ngx-toastr
- **Loading States** — Smooth experience with ngx-spinner

---

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### 1. Clone the repository

```bash
git clone https://github.com/mohammedarafaa/rose.git
cd rose
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
ng serve
```

### 4. Open your browser

Navigate to `http://localhost:4200`

<details>
<summary>Build & test commands</summary>

**Production build:**
```bash
ng build
```
Build artifacts are output to the `dist/` directory.

**Run tests:**
```bash
ng test
```
</details>

---

## Usage

Once it's running, here's what you can do in Rose:

- **Browse products** — view items with images, descriptions, and prices, organized by category
- **Search & filter** — narrow results by category, price range, and ratings
- **Manage your cart** — add multiple products, update quantities, and see live totals
- **Save a wishlist** — bookmark items for later without losing your place
- **Authenticate** — register, log in, and manage your profile via JWT-secured routes
- **Check out** — enter shipping details and complete payment through the checkout flow
- **Track orders** — view order status and full order history after purchase

---

## Tech Stack

![Angular](https://img.shields.io/badge/Angular_17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

**Key libraries:**
- Angular Material & PrimeNG — component library
- ngx-owl-carousel — product image sliders
- ngx-toastr — toast notifications
- ngx-spinner — loading indicators
- RxJS — state management with observables

---

## Project Structure

```
rose/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── guards/         # Route guards
│   │   └── models/         # TypeScript interfaces
│   ├── assets/              # Images, icons, etc.
│   └── environments/        # Environment configs
```

---

## Contributing

Contributions, issues, and feature requests are welcome — feel free to check the [issues page](https://github.com/mohammedarafaa/rose/issues) or open a pull request.

---

## Author

**Mohammed Arafa**
- GitHub: [@mohammedarafaa](https://github.com/mohammedarafaa)
- Email: mohammeddarafaa22@gmail.com

## License

This project is open source and available under the MIT License.

---

If you found this project helpful, please give it a star!
