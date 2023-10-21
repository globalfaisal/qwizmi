# qwizmi

Quiz App that uses Open Ai api

## Features

This repository is 🔋 battery packed with:

- ⚡️ Next.js 13 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
- 💎 Pre-built Components — Components that will **automatically adapt** with your brand color.
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- ⏰ Release Please — Generate your changelog by activating the `release-please` workflow
- 👷 Github Actions — Lint your code on PR
- 🚘 Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
- 🔥 Snippets — A collection of useful snippets
- 👀 Open Graph Helper Function — Awesome open graph generated using [og](https://github.com/theodorusclarence/og), fork it and deploy!
- 🗺 Site Map — Automatically generate sitemap.xml

## Getting Started

### 1. Setup

1. Install [PNPM - package manager](https://github.com/pnpm/pnpm)
   - We use PNPM to make sure we're all using the same `node` and `npm` versions
2. `git clone` this project and `cd` into the project directory
3. Setup Node.js and PNPM versions used by this project:
   - Install pnpm if you already don't have it: `npm install -g @pnpm/exe`
   - Switch to the Node.js version: `pnpm env use -g <node-version>`. Also
4. Install NPM dependencies: `pnpm install`
5. Copy the `.env.example` file to create `.env.local` and replace the values with your development values
6. List available project scripts: Run `pnpm run` or look in `package.json`

### 2. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

The development server is using next.js HTTPS support for development(localhost): check package.json dev script.
Open [https://localhost:3000](https://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/app/page.tsx`.

### 3. Commit Message Convention

Using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.
