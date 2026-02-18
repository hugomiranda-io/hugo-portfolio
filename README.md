# Hugo Miranda — Portfolio

Portfolio personnel construit avec Astro + React.

## Pages

- `/` : page d'accueil
- `/profile` : parcours (expériences + formations)

## Stack

- Astro + React + TypeScript
- Sass
- Radix UI (Accordion) + Lucide
- ESLint + Prettier + Vitest + Playwright

## Démarrer

```sh
pnpm install
pnpm dev
```

Site dispo sur `http://localhost:4321`.

## Scripts utiles

- `pnpm dev`
- `pnpm build`
- `pnpm preview`
- `pnpm lint`
- `pnpm format:check`
- `pnpm test:unit`
- `pnpm test:e2e`

Note: pour l'e2e, installer les navigateurs Playwright une fois:

```sh
pnpm exec playwright install
```

## Où modifier le contenu

- `src/data/profile.ts` : infos perso, textes, stack, highlights
- `src/data/timeline.ts` : expériences et formations
- `src/data/navigation.ts` : menu
- `src/data/socials.ts` : liens sociaux/contact
- `src/layouts/Layout.astro` : structure globale de page

## Structure simplifiée

```text
/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   └── utils/
├── tests/
└── package.json
```
