# Cabansay Portfolio

My personal portfolio for our Prelim Exam project. This site showcases who I am my skills projects and how to contact me

## Links

- **GitHub:** [github.com/Zukich25/Cabansay-Portfolio](https://github.com/Zukich25/Cabansay-Portfolio)

## Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **clsx** + **tailwind-merge** (`cn()` utility)

## Project Structure sir role unsay porma angay sa rubric

```
src/
├── components/
│   ├── common/       # Header, ThemeProvider
│   ├── ui/           # Button, Card, ProfileAvatar, ThemeToggle, etc.
│   └── features/     # HeroSection, AboutSection, ServicesSection, etc.
├── layouts/          # MainLayout
├── pages/            # Home, About, Services, Skills, Contact
├── lib/              # cn.ts, theme.ts
└── styles/           # global.css
```

## Pages & Routes


| Route       | Page     | Section(s)                     |
| ----------- | -------- | ------------------------------ |
| `/`         | Home     | HeroSection                    |
| `/services` | Services | ServicesSection                |
| `/about`    | Resume   | AboutSection                   |
| `/skills`   | Work     | SkillsSection, ProjectsSection |
| `/contact`  | Contact  | ContactSection                 |


**Page rule:** Page files only render Section components. Layout is handled by `MainLayout` in the router.

## How I Built This

1. Set up React + Vite + TypeScript and Tailwind CSS
2. Added alias paths (`@/`) and the `cn()` helper
3. Organized components into **common**, **ui**, and **features** folders
4. Connected pages using React Router
5. Built each section (Hero, About, Services, Work, Contact)
6. Added light/dark mode using `useState` and `localStorage`
7. Deployed to GitHub and Vercel

## Getting Started

```bash
npm install
npm run dev
npm run build
```

## Author

**Cabansay** — BSIT 3-B

Prelim Exam Portfolio Project  
  
Prof. Ariel Batoon