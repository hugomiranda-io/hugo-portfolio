# Hugo Miranda — Portfolio

Portfolio personnel (FR) construit avec Astro + React.

- Accueil (`/`) : hero + tuiles (points clés + liens)
- Parcours (`/profile`) : timeline alimentée par des fichiers Markdown (expériences + formations)

## Stack

- Astro 5 + React 19 + TypeScript
- Content Collections (`astro:content`) + rendu Markdown via `@astrojs/markdown-remark`
- UI : Radix UI (Accordion), icônes Lucide
- Qualité : ESLint + Prettier

## Démarrer

Prérequis : Node.js (18+ recommandé) et `pnpm`.

```sh
pnpm install
pnpm dev
```

Le serveur démarre sur `http://localhost:4321`.

## Scripts

| Commande            | Action                       |
| :------------------ | :--------------------------- |
| `pnpm dev`          | Lance le serveur de dev      |
| `pnpm build`        | Build de prod vers `./dist/` |
| `pnpm preview`      | Prévisualise le build        |
| `pnpm lint`         | Lint (ESLint)                |
| `pnpm lint:fix`     | Lint + auto-fix              |
| `pnpm format`       | Format (Prettier)            |
| `pnpm format:check` | Vérifie le format            |
| `pnpm astro`        | CLI Astro                    |

## Personnalisation

### Données (Accueil / navigation / footer)

Les contenus “data-driven” sont dans `src/data/` :

- `src/data/hero.ts` : titre, sous-titre, description
- `src/data/keyHighlights.ts` : tuiles “points clés” (dont le lien vers `/profile`)
- `src/data/keySocials.ts` : tuiles “profils”
- `src/data/navbar.ts` : items de navigation
- `src/data/footerSocials.ts` : liens du footer

À ajuster aussi :

- `src/layouts/Layout.astro` : balises `<title>`, meta, layout global
- `src/components/organisms/Footer/Footer.tsx` : email/CTA de contact

### Timeline (`/profile`)

Les entrées de timeline sont dans `src/content/timeline/*.md` et sont typées via `src/content/config.ts`.

- `variant: career` (expérience) : affichée en accordéon + support du contenu Markdown (body)
- `variant: education` (formation) : affichée en liste (sans body)

Exemple “career” :

```md
---
variant: career
startPeriod: 2022
endPeriod: 2024
title: Développeur Front-End
organization: Entreprise
location: Paris, France
---

Contenu Markdown (détails, attributions, stack, etc.).
```

Exemple “education” :

```md
---
variant: education
endPeriod: 2020
title: Formation
organization: École
location: Ville, Pays
---
```

Tri :

- Expériences : décroissant par `startPeriod`
- Formations : décroissant par `endPeriod`

## Structure du projet

```text
/
├── public/                 # assets statiques (fonts, favicon…)
├── src/
│   ├── components/         # React (atoms/molecules/organisms)
│   ├── content/timeline/   # Markdown (parcours)
│   ├── data/               # données typées (hero, navbar, tuiles…)
│   ├── layouts/            # layout Astro global
│   ├── pages/              # routes Astro (`/`, `/profile`)
│   ├── styles/             # styles globaux
│   └── types/              # types TS partagés
└── package.json
```

## Alias TypeScript

Les imports utilisent des alias définis dans `tsconfig.json` (ex : `@components`, `@data`, `@layouts/*`, `@styles/*`).

## Déploiement

`pnpm build` génère un site statique dans `dist/` (déployable sur Netlify, Vercel, GitHub Pages, etc.).
