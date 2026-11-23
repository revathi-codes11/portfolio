# Revathi KM Portfolio

A responsive portfolio built with React, Vite, Tailwind CSS, GSAP, and Framer Motion.

## Requirements

- Node.js 24.x with npm (the project has been built successfully with Node.js 24).
- Visual Studio Code.
- Git, if cloning the repository.

Check Node.js and npm in a terminal:

```sh
node --version
npm --version
```

If either command is missing, install Node.js from https://nodejs.org/ and restart VS Code.

## Run in VS Code

### 1. Open the project

For a fresh copy, run:

```sh
git clone https://github.com/revathi-codes11/portfolio.git
cd portfolio
```

In VS Code, choose **File → Open Folder** and select the `portfolio` folder. Open the folder that contains `package.json`.

If you already have the project on your Mac, open that existing folder instead; you do not need to clone it again.

### 2. Install dependencies

Choose **Terminal → New Terminal** in VS Code, then run:

```sh
npm ci
```

Run this on first setup or after the dependency lockfile changes. No `.env` file or API keys are required to run the portfolio.

### 3. Start the portfolio

```sh
npm run dev
```

Open the **Local** URL printed in the terminal, usually http://localhost:5173/. If that port is already in use, Vite chooses another port; use the URL it prints.

Keep the terminal running while using the site. Save changes in VS Code to see them update in the browser. Press **Control + C** in the terminal to stop the server.

## Build and preview

Create the production build:

```sh
npm run build
```

The generated website is saved in `dist/`.

Preview that build locally:

```sh
npm run preview
```

Open the URL printed in the terminal. Rebuild after source changes before previewing them. Building or previewing does not publish the website online.

## Where to edit content

- `src/components/Hero.jsx`: landing page, name, university, and hero image reference.
- `src/components/About.jsx`: biography and qualifications.
- `src/components/Expertise.jsx`: technical capabilities.
- `src/components/Skills.jsx`: skills presentation.
- `src/data/referencePortfolio.json`: skills and featured project content.
- `src/components/Projects.jsx`: project cards and project-detail links.
- `src/components/Contact.jsx`: contact form and destination email.
- `src/components/Footer.jsx`: social links and location.
- `src/assets/Portfolio/revathi-hero.jpg`: hero photograph.
- `public/images/`: project preview images.

The contact form opens the visitor's email application with a draft. It does not send messages through a backend. Update the email and social links before using a different contact identity.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm run dev` | Start the development server |
| `npm run build` | Generate the production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the configured ESLint checks |

## Troubleshooting

- **Cannot find `package.json`:** open the terminal in the project folder, not its parent.
- **Node version error:** use Node.js 24.x, restart the terminal, and run `npm ci` again.
- **Page does not open:** keep the development server running and use the exact Local URL shown in its output.
- **Old content in production preview:** run `npm run build` again before `npm run preview`.

`node_modules/`, `dist/`, local environment files, and Mac system files are excluded from Git.
