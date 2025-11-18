# SEMS Events - Premium Event Management Website
 npm run dev:all
A modern, responsive website for SEMS Events, a premium event management company. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, avant-garde design with geometric elements
- 📱 Fully responsive across all devices
- ⚡ Smooth animations powered by Framer Motion
- 🎯 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🚀 Vite for fast development and building

## Pages

- **Home**: Hero section with stats, testimonials, and call-to-action
- **About**: Company story, team, values, and achievements
- **Services**: Detailed service offerings with pricing
- **Portfolio**: Project showcase with filtering and modal views
- **Contact**: Contact form with company information

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd legal-solutions-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Lucide React** - Icon library

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── Pages/              # Page components
│   ├── Home.tsx        # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Portfolio.tsx   # Portfolio page
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## Customization

### Colors and Typography

The design uses a black and white color scheme with custom fonts:
- **Space Grotesk** - Primary font
- **JetBrains Mono** - Monospace font

### Animations

Custom animations are defined in both CSS and Tailwind config:
- Glitch text effects
- Morphing shapes
- Slide animations
- Border animations

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting service of choice.

## License

This project is proprietary and confidential.
