# Hindu Bubbles - Landing Page

A beautiful landing page for Hindu Bubbles, a divine bubble shooter mobile game featuring Hindu mythology and themes.

## 🎮 About the Game

Hindu Bubbles is a captivating mobile puzzle game where players embark on a spiritual journey through Hindu mythology. Help various deities overcome challenges, restore sacred realms, and gather divine knowledge along the way.

### Key Features

- **Spiritual Journey**: Explore worlds themed around Hindu deities
- **Divine Knowledge**: Learn about Hindu mythology through educational pop-ups
- **Power-Ups**: 
  - Chakra Burst - Clear large areas
  - Trident Strike - Pierce through lines
  - Celestial Swirl - Target specific colors
- **Dashavatara Lives System**: 10 lives representing the avatars of Vishnu

## 🚀 Development

This landing page is built with:
- [Preact](https://preactjs.com/) - Fast 3kb alternative to React
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime

### Prerequisites

- [Bun](https://bun.sh/) installed on your system

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/PingPong-Games/hindu-bubbles-website.git
   cd hindu-bubbles-website
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Run development server**
   ```bash
   bun run dev
   ```

4. **Build for production**
   ```bash
   bun run build
   ```

5. **Preview production build**
   ```bash
   bun run preview
   ```

## 📦 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup

1. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to Pages section
   - Under "Build and deployment", select "GitHub Actions" as the source

2. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy landing page"
   git push origin main
   ```

3. **Access your site**
   - Your site will be available at: `https://pingpong-games.github.io/hindu-bubbles-website/`

### Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
bun run build

# The dist folder contains your production-ready files
# You can deploy the contents of the dist folder to any static hosting service
```

## 🎨 Customization

### Update Store Links

Edit the download button links in `src/app.tsx`:

```tsx
// Replace # with actual store URLs
<a href="YOUR_APP_STORE_URL" className="btn btn-appstore">
<a href="YOUR_GOOGLE_PLAY_URL" className="btn btn-playstore">
```

### Modify Colors

Edit the CSS variables in `src/app.css`:

```css
:root {
  --color-primary: #ff6b35;
  --color-secondary: #f7931e;
  --color-accent: #c83e4d;
  --color-divine: #9b59b6;
  --color-gold: #ffd700;
  /* ... */
}
```

### Update Content

All content is in `src/app.tsx`. Simply edit the text, features, and sections as needed.

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1280px - 1920px)
- Tablet (768px - 1280px)
- Mobile (320px - 768px)

## 🌟 Features Highlighted

- ✨ Animated hero section with floating bubbles
- 🎯 Feature cards showcasing game mechanics
- ⚡ Power-up showcase with hover effects
- 🕉️ Dashavatara lives system display
- 📱 App store download buttons
- 🎨 Beautiful gradients with Hindu-themed colors

## 📄 License

Copyright © 2025 Hindu Bubbles. All rights reserved.

## 🙏 Credits

Built with love for Hindu mythology and puzzle gaming enthusiasts.

