<div align="center">

<br/>

<img src="https://img.shields.io/badge/✈️-CholoBuddy-000000?style=for-the-badge&labelColor=000000&color=705d00" height="48" alt="CholoBuddy"/>

<br/><br/>

**Premium Travel Portal & Tour Booking Platform for Bangladesh 🇧🇩**

*চলো বন্ধু — Let's go, friend.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.19-404d59?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=flat-square&logo=firebase&logoColor=black)](https://firebase.google.com/)
[![Better Auth](https://img.shields.io/badge/Better--Auth-1.6-E87A00?style=flat-square)](https://www.better-auth.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.9-EF4444?style=flat-square&logo=turborepo&logoColor=white)](https://turbo.build/)
[![pnpm](https://img.shields.io/badge/pnpm-Workspaces-F69220?style=flat-square&logo=pnpm&logoColor=white)](https://pnpm.io/)

<br/>

</div>

---

## ✨ What is CholoBuddy?

**CholoBuddy** is a full-stack, bilingual (🇬🇧 English / 🇧🇩 বাংলা) travel platform built for exploring and booking curated tours across Bangladesh. From the misty peaks of Sajek Valley to the world's longest natural beach at Cox's Bazar — CholoBuddy brings every journey to life.

<br/>

## 🎯 Features at a Glance

| Feature | Description |
|---------|-------------|
| 🗺️ **Tour Browsing** | Curated tour listings with rich descriptions, itineraries, and ratings |
| 🎫 **Booking & Payment** | Multi-step checkout with Card, Mobile Banking (bKash, Nagad, Rocket), and Net Banking |
| 🌟 **Wishlists** | Save favourite tours for later, powered by real-time Firestore sync |
| 🏅 **User Level System** | Earn points and level up from Explorer → Elite Traveler |
| 🌐 **Bilingual UI** | Full toggle between English and Bengali — every page, every component |
| 🛡️ **Role-Based Access** | Separate User Dashboard and Admin Control Panel with route protection |
| 📊 **Admin Dashboard** | Manage tours, bookings, users, and revenue analytics |
| 📱 **Responsive Design** | Pixel-perfect across mobile, tablet, and desktop |

<br/>

## 🏗️ Architecture

```
cholobuddy2.0/                  ← Turborepo Monorepo Root
├── apps/
│   ├── web/                    ← Next.js 15 Frontend (App Router)
│   │   ├── src/app/            ← Pages: home, trips, payment, dashboard, admin…
│   │   ├── src/components/     ← Navbar, TourCard, BookingWidget, Hero…
│   │   ├── src/hooks/          ← useAuth, useBookings, useWishlist, useTours…
│   │   └── src/context/        ← Toast notifications, Language provider
│   │
│   └── server/                 ← Express.js + TypeScript Backend
│       └── src/
│           ├── routes/         ← /api/tours, /api/bookings, /api/wishlist, /api/users
│           ├── controllers/    ← Request handlers
│           ├── services/       ← Firestore business logic
│           ├── middleware/      ← Auth, validation, error handling
│           └── auth.ts         ← Better Auth configuration
│
├── firebase.json               ← Firebase project config
├── firestore.indexes.json      ← Composite index definitions
└── firestore.rules             ← Security rules
```

<br/>

## 🛠️ Tech Stack

### Frontend
| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Styling | Styled-Components (no Tailwind — fully custom design system) |
| Animations | Framer Motion — micro-interactions, page transitions |
| Auth Client | Better Auth (session hooks) |
| Localization | react-i18next (English + Bengali) |

### Backend
| Layer | Technology |
|-------|-----------|
| Framework | Express.js + TypeScript |
| Database | Firebase Firestore |
| Authentication | Better Auth + `better-auth-firestore` adapter |
| Validation | Zod schemas |
| Image Upload | ImgBB API |
| Deployment | Vercel Serverless |

<br/>

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) v8+

```bash
npm install -g pnpm
```

### 1. Clone the Repository

```bash
git clone https://github.com/Sumyta-Bentey-Habib/cholobuddy.git
cd cholobuddy
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Configure Environment Variables

#### `apps/web/.env`
```env
NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000"
NEXT_PUBLIC_BACKEND_URL="http://localhost:3001"
```

#### `apps/server/.env`
```env
PORT=3001
FIREBASE_PROJECT_ID="your-firebase-project-id"
GOOGLE_APPLICATION_CREDENTIALS="service-account.json"
BETTER_AUTH_SECRET="your-super-secret-key"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_FRONTEND_URL="http://localhost:3000"
IMGBB_API_KEY="your-imgbb-api-key"
```

> [!NOTE]
> You need a Firebase project with Firestore enabled and a service account JSON file. Place it at `apps/server/service-account.json`.

### 4. Seed the Database (Optional)

```bash
cd apps/server
pnpm tsx src/seed.ts
```

### 5. Start Development Servers

```bash
# From the repo root — starts both frontend (3000) and backend (3001)
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

<br/>

## 📋 Available Commands

Run all commands from the **monorepo root**:

| Command | Description |
|---------|-------------|
| `pnpm run dev` | Start both apps in development mode with hot-reload |
| `pnpm run build` | Build both apps for production |
| `pnpm --filter web dev` | Start only the Next.js frontend |
| `pnpm --filter server dev` | Start only the Express backend |

<br/>

## ☁️ Deployment (Vercel)

This project deploys as **two separate Vercel projects** from the same repository.

| Vercel Project | Root Directory | Type |
|----------------|---------------|------|
| `cholobuddy-api` | `apps/server` | Serverless (Express via `@vercel/node`) |
| `cholobuddy-web` | `apps/web` | Next.js |

### Backend Environment Variables (Vercel)
```
FIREBASE_PROJECT_ID=cholobuddy
GOOGLE_SERVICE_ACCOUNT_JSON={"type":"service_account",...}  ← paste full JSON
BETTER_AUTH_SECRET=your-production-secret
BETTER_AUTH_URL=https://cholobuddy-web.vercel.app
NEXT_PUBLIC_FRONTEND_URL=https://cholobuddy-web.vercel.app
IMGBB_API_KEY=your-key
```

### Frontend Environment Variables (Vercel)
```
NEXT_PUBLIC_BACKEND_URL=https://cholobuddy-api.vercel.app
NEXT_PUBLIC_FRONTEND_URL=https://cholobuddy-web.vercel.app
```

> [!IMPORTANT]
> Add your Vercel frontend domain to **Firebase Console → Authentication → Authorized domains**.

<br/>

## 🗂️ API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `GET` | `/api/tours` | Public | List all tours |
| `POST` | `/api/tours` | Admin | Create a new tour |
| `PATCH` | `/api/tours/:id` | Admin | Update a tour |
| `DELETE` | `/api/tours/:id` | Admin | Delete a tour |
| `GET` | `/api/bookings` | User | Get current user's bookings |
| `POST` | `/api/bookings` | User | Create a booking |
| `DELETE` | `/api/bookings/:id` | User/Admin | Cancel a booking |
| `GET` | `/api/wishlist` | User | Get wishlist tour IDs |
| `POST` | `/api/wishlist` | User | Add tour to wishlist |
| `DELETE` | `/api/wishlist` | User | Remove tour from wishlist |
| `GET` | `/api/users` | Admin | List all users |
| `PATCH` | `/api/users` | Admin | Update user role |
| `ALL` | `/api/auth/*` | — | Better Auth session routes |

<br/>

## 🎨 Design System

The UI is built on a hand-crafted design system — no utility-class frameworks:

| Token | Value | Usage |
|-------|-------|-------|
| `#000000` | Onyx Black | Primary text, buttons |
| `#705d00` | Golden Ochre | Accent, highlights |
| `#526069` | Slate | Secondary text |
| `#f8f9fa` | Off-White | Page backgrounds |
| `#1a2332` | Deep Navy | Dashboard surfaces |

Every component lives in its own `index.tsx` + `styles.ts` pair — zero global utilities, maximum design control.

<br/>

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

<br/>

## 📄 License

This project is private. All rights reserved © 2026 CholoBuddy.

<br/>

---

<div align="center">

Made with ❤️ for Bangladesh 🇧🇩

*চলো বাংলাদেশ আবিষ্কার করি — Let's discover Bangladesh*

</div>
