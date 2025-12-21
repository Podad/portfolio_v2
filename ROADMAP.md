# ROADMAP - Portfolio Cloud & DevOps

> Inspiré du style de [cathydolle.com](https://www.cathydolle.com/) (Awwwards Honorable Mention)

---

## 1. Stack Technique

| Élément           | Technologie                             |
| ----------------- | ------------------------------------    |
| **Framework**     | Next.js 14 (App Router) ou React + Vite |
| **3D/Animations** | Three.js + React Three Fiber            |
| **Animations UI** | GSAP + Framer Motion                    |
| **Styles**        | Tailwind CSS ou SCSS Modules            |
| **Déploiement**   | Vercel / AWS Amplify / Cloudflare Pages |

---

## 2. Structure des Sections

```text
/
├── Loader (écran de chargement animé)
├── Hero Section
├── About / À propos
├── Skills / Compétences
├── Projects / Projets
├── Experience / Timeline
├── Contact
└── Footer
```

---

## 3. Design & Style

### Thème visuel

- **Fond** : Noir profond (`#000` ou `#0a0a0a`)
- **Texte principal** : Blanc (`#fff`)
- **Accent** : Cyan/Bleu cloud (`#00d4ff`) ou Vert DevOps (`#00ff88`)
- **Typographie** : Police moderne sans-serif (Inter, Space Grotesk, ou Neue Montreal)

### Effets signatures

| Effet             | Description                                          |
| ----------------- | ---------------------------------------------------- |
| **Loader**        | Barre de progression + compteur % + nom qui apparaît |
| **Cursor custom** | Cercle qui suit la souris, grandit au hover          |
| **Smooth scroll** | Locomotive Scroll ou Lenis                           |
| **Text reveal**   | Textes qui apparaissent lettre par lettre au scroll  |
| **3D Background** | Particules/nuages connectés (style réseau/cloud)     |
| **Hover effects** | Images qui se distordent, scale avec parallax        |

---

## 4. Contenu par Section

### Hero Section

```text
┌─────────────────────────────────────────────────────┐
│                                                     │
│     PRÉNOM NOM                                      │
│     ─────────────────                               │
│     Cloud & DevOps Engineer                         │
│                                                     │
│     [Animation 3D : nuage de particules /           │
│      infrastructure nodes connectés]                │
│                                                     │
│     ↓ Scroll indicator                              │
└─────────────────────────────────────────────────────┘
```

### About

- Photo avec effet parallax ou glitch
- Texte d'intro animé
- Chiffres clés animés (années d'XP, projets, certifications)

### Skills / Compétences

```text
CLOUD PLATFORMS          DEVOPS TOOLS           INFRASTRUCTURE
─────────────────        ─────────────          ──────────────
○ AWS                    ○ Docker               ○ Terraform
○ Azure                  ○ Kubernetes           ○ Ansible
○ GCP                    ○ Jenkins/GitLab CI    ○ Pulumi
○ OVH                    ○ ArgoCD               ○ CloudFormation

[Icônes animées au hover avec barre de progression]
```

### Projects

Style : grille ou slider horizontal avec :

- Image/preview du projet
- Titre + stack utilisée
- Effet de distorsion au hover
- Tags : `AWS` `Kubernetes` `Terraform` etc.

**Exemples de projets à mettre en avant :**

- Infrastructure as Code multi-cloud
- Pipeline CI/CD automatisé
- Migration cloud d'une application
- Cluster Kubernetes en production
- Monitoring stack (Prometheus/Grafana)

### Experience / Timeline

Timeline verticale animée avec :

- Entreprises
- Rôles
- Dates
- Technologies utilisées

### Contact

- Formulaire minimaliste
- Liens : GitHub, LinkedIn, Email
- Animation d'envoi

---

## 5. Arborescence du Projet

```text
portfolio-devops/
├── public/
│   ├── fonts/
│   ├── images/
│   └── models/              # Fichiers 3D si besoin
├── src/
│   ├── components/
│   │   ├── Loader/
│   │   ├── Cursor/
│   │   ├── Navigation/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Experience/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── three/               # Scènes Three.js
│   │   └── CloudScene.jsx
│   ├── hooks/
│   │   ├── useScrollProgress.js
│   │   └── useMousePosition.js
│   ├── styles/
│   │   ├── globals.scss
│   │   └── variables.scss
│   ├── data/
│   │   ├── projects.json
│   │   └── skills.json
│   └── pages/ (ou app/)
│       └── index.jsx
├── package.json
└── next.config.js
```

---

## 6. Étapes de Développement

| #   | Tâche                                    | Priorité | Status |
| --- | ---------------------------------------- | -------- | ------ |
| 1   | Setup projet (Next.js + Tailwind/SCSS)   | 🔴 High  | [ ]    |
| 2   | Créer le Loader animé                    | 🔴 High  | [ ]    |
| 3   | Implémenter le smooth scroll (Lenis)     | 🔴 High  | [ ]    |
| 4   | Cursor personnalisé                      | 🟡 Med   | [ ]    |
| 5   | Hero section + animation 3D              | 🔴 High  | [ ]    |
| 6   | Section About avec animations GSAP       | 🟡 Med   | [ ]    |
| 7   | Section Skills (grille interactive)      | 🟡 Med   | [ ]    |
| 8   | Section Projects (galerie avec effets)   | 🔴 High  | [ ]    |
| 9   | Timeline Experience                      | 🟡 Med   | [ ]    |
| 10  | Formulaire Contact                       | 🟢 Low   | [ ]    |
| 11  | Responsive design                        | 🔴 High  | [ ]    |
| 12  | Optimisation performances                | 🟡 Med   | [ ]    |
| 13  | Déploiement                              | 🟢 Low   | [ ]    |

---

## 7. Idées d'Éléments 3D/Visuels Cloud & DevOps

- **Réseau de nodes** : points connectés représentant une infrastructure
- **Terminal flottant** : code qui défile en arrière-plan
- **Pipeline animé** : flux de CI/CD visualisé
- **Cubes/containers** : représentation Docker/K8s
- **Nuage de particules** : symbolisant le cloud

---

## 8. Ressources & Inspiration

- [Cathy DOLLE Portfolio - Awwwards](https://www.awwwards.com/sites/cathy-dolle-portfolio)
- [Site officiel Cathy Dolle](https://www.cathydolle.com/)
- [GSAP Documentation](https://greensock.com/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Lenis Smooth Scroll](https://github.com/studio-freight/lenis)
- [Framer Motion](https://www.framer.com/motion/)

---

## 9. Commandes Utiles

```bash
# Installation des dépendances
npm install gsap @gsap/react framer-motion three @react-three/fiber @react-three/drei lenis

# Développement
npm run dev

# Build production
npm run build

# Déploiement Vercel
vercel --prod
```
