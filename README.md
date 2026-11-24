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

If either command is missing, install Node.js 24 from https://nodejs.org/ and restart VS Code. The project declares Node.js 24 or newer as its minimum and includes `.nvmrc` for the tested Node.js 24 version. If you use nvm, run `nvm install` followed by `nvm use` in the project folder.

## Run in VS Code

### 1. Open the project

For a fresh copy, run:

```sh
git clone https://github.com/revathi-codes11/portfolio.git
cd portfolio
```

In VS Code, choose **File → Open Workspace from File** and select `portfolio.code-workspace` inside the downloaded project. This opens the correct project root. Alternatively, choose **File → Open Folder** and select the folder containing `package.json`.

If you already have the project on your Mac, open that existing folder instead; you do not need to clone it again.

### 2. Install dependencies

Choose **Terminal → New Terminal** in VS Code, then run:

```sh
npm ci
```

Run this on first setup or after the dependency lockfile changes. No `.env` file or API keys are required to run the portfolio.

### 3. Start the portfolio

```sh
npm start
```

This starts Vite and asks your default browser to open the portfolio. To start without automatically opening a browser, use `npm run dev`.

Open the **Local** URL printed in the terminal, usually http://localhost:5173/. If that port is already in use, Vite chooses another port; use the URL it prints.

Keep the terminal running while using the site. Save changes in VS Code to see them update in the browser. Press **Control + C** in the terminal to stop the server.

## Build and preview

Create the production build:

```sh
npm run build
```

The generated website is saved in `dist/`.

Build and preview the latest source locally:

```sh
npm run preview
```

`npm run preview` now automatically runs a fresh production build before starting the preview server. If the build fails, preview does not start. Open the URL printed in the terminal. For edits made while preview is already running, stop it with **Control + C** and run it again; use `npm run dev` for live updates while editing. Building or previewing does not publish the website online.

## Where to edit content

- `src/components/Hero.jsx`: landing page, name, university, and navigation.
- `src/components/LivingPortrait.jsx`: interactive hero character.
- `src/lib/livingPortrait.js`: portrait animation and interactions.
- `src/components/About.jsx`: biography and qualifications.
- `src/components/Expertise.jsx`: technical capabilities.
- `src/components/Skills.jsx`: skills presentation.
- `src/data/referencePortfolio.json`: skills and featured project content.
- `src/components/Projects.jsx`: project cards and project-detail links.
- `src/components/Contact.jsx`: contact form and destination email.
- `src/components/Footer.jsx`: social links and location.
- `public/portrait/`: locally bundled character expressions.
- `public/images/`: project preview images.

The contact form opens the visitor's email application with a draft. It does not send messages through a backend. Update the email and social links before using a different contact identity.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm ci` | Install dependencies from the lockfile |
| `npm start` | Start the development server and open the browser |
| `npm run dev` | Start the development server without opening the browser |
| `npm run build` | Generate the production build |
| `npm run preview` | Build the latest source, then preview it locally |
| `npm run lint` | Run the configured ESLint checks |

## Setup help

These are solutions for common setup situations, not a list of known project failures.

- **Cannot find `package.json`:** open `portfolio.code-workspace` in VS Code, then open a new terminal. Run commands from the project root. npm cannot find this project when run from an unrelated folder.
- **Node version error:** use Node.js 24.x (`nvm install` and `nvm use` if nvm is installed), restart the terminal, and run `npm ci` again.
- **Page does not open:** `npm start` opens the browser automatically. If your system blocks automatic opening, use the exact Local URL printed in the terminal. Keep the server running; the address only works while it is running.
- **Old content in production preview:** restart `npm run preview`; it rebuilds automatically. Use `npm run dev` while editing to see saved changes immediately.

`node_modules/`, `dist/`, local environment files, and Mac system files are excluded from Git.
