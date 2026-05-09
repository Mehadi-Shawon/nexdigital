# NexbeeLabs Website

## Setup in VS Code

1. Open VS Code
2. Open this folder: File → Open Folder → select `nexbeelabs-project`
3. Open the terminal: View → Terminal (or Ctrl + `)
4. Run these commands:

```bash
npm install
npm run dev
```

5. Open your browser and go to: http://localhost:5173

## Project Structure

```
nexbeelabs-project/
├── src/
│   ├── components/
│   │   ├── Badge.jsx      # Reusable badge pill
│   │   ├── Navbar.jsx     # Top navigation
│   │   └── Footer.jsx     # Footer
│   ├── pages/
│   │   └── Home.jsx       # Full homepage (Hero, Services, WhyUs, Process, Testimonials, CTA)
│   ├── styles/
│   │   └── global.css     # All styles
│   ├── App.jsx            # Routes
│   └── main.jsx           # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Deploy to Vercel (free)

```bash
npm install -g vercel
vercel
```
