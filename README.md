# WisperAI Finance Agents

Modern financial AI agents built with React, TypeScript, and Firebase.

## Features

- Email collection forms integrated with Firebase
- Modern UI with a clean design
- Mobile responsive layout
- Custom animations and transitions

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Firebase (Firestore)
- React Hook Form with Zod validation

## Development

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Firebase Integration

The application uses Firebase Firestore to store email leads collected from various contact forms across the website. Each submission is stored with:

- Email address
- Source identifier (which form was used)
- Timestamp

## Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, or Firebase Hosting.

```bash
npm run build
```

The build output will be available in the `dist` folder.
