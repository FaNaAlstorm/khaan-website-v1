# Khaan Burger × Poké — Site vitrine V1

Première version premium, immersive et mobile-first du site vitrine Khaan Burger × Poké.

## Lancer le projet

```bash
npm install
npm run dev
```

Le site sera disponible sur `http://localhost:3000`.

> Dans cet environnement, l'installation peut être bloquée par la politique réseau du registre npm. Le projet est néanmoins prêt à être installé dans un environnement avec accès au registre npm.

## Où modifier les visuels

Tous les emplacements d'images sont dans `public/images`. Les fichiers SVG actuels sont des placeholders propres, non générés par IA, à remplacer par les vraies photos/logos en gardant les mêmes noms :

- `logo-main.svg`
- `logo-burger.svg`
- `logo-poke.svg`
- `burger-khaan.svg`
- `burger-bkhaan.svg`
- `burger-tkhaan.svg`
- `burger-chickhaan.svg`
- `burger-black-fish.svg`
- `burger-vegget.svg`
- `burger-mexkhaan.svg`
- `poke-small.svg`
- `poke-medium.svg`
- `poke-large.svg`
- `restaurant-exterior.svg`
- `restaurant-interior.svg`

## Où modifier textes, liens et cartes

- Contenus structurés : `data/site.ts`
- Sections et textes principaux : `app/page.tsx`
- Identité visuelle, couleurs, animations CSS : `app/globals.css`
- Logo typographique temporaire : `components/BrandMark.tsx`

## V2 recommandée

- Intégrer les vraies photos détourées des burgers et pokés.
- Remplacer le logo typographique par les fichiers de marque finaux.
- Brancher les boutons de commande vers Uber Eats, Click & Collect et Google Maps.
- Ajouter des micro-interactions menu/prix si le tunnel de commande devient prioritaire.
- Préparer SEO local, Open Graph, page mentions légales et tracking événements CTA.
