
const SKILLS = [
  {
    titre: "Frontend",
    dark: false,
    tags: [
      "HTML", "CSS", "JavaScript", "React",
      "React Router", "Sass", "jQuery"
    ]
  },
  {
    titre: "Backend",
    dark: false,
    tags: [
      "Node.js", "Express", "JWT",
      "bcrypt", "Multer", "Sharp"
    ]
  },
  {
    titre: "Données",
    dark: false,
    tags: ["MongoDB", "Mongoose", "SQLite"]
  },
  {
    titre: "Outils",
    dark: true,
    tags: [
      "Git", "GitHub", "Figma",
      "Lighthouse", "Chrome DevTools"
    ]
  }
];

const PROJECTS = [
  {
    id: "sophie-bluel",
    titre: "Sophie Bluel",
    sousTitre: "Portfolio interactif avec interface d'administration",
    description: "Portfolio d'architecte d'intérieur dynamique, avec galerie filtrable et espace d'administration sécurisé.",
    resultat: "Interface d'administration avec connexion",
    tags: ["JavaScript", "Node.js", "SQLite"],
    legende: "Capture Sophie Bluel",
    image: "images/sophie_bluel.png",

    contexte: "Dans le cadre de ma formation chez OpenClassrooms, j’ai développé un portfolio web pour une architecte d’intérieur. Le projet comprend une interface publique présentant ses réalisations et une interface d’administration permettant de gérer les projets de la galerie.",

    objectifs: "L’objectif était de rendre la galerie dynamique, de permettre le filtrage des réalisations par catégories et de développer un espace d’administration sécurisé pour ajouter et supprimer des projets.",

    technologies: [
      { nom: "HTML5", logo: "html5" },
      { nom: "CSS3", logo: "css" },
      { nom: "JavaScript", logo: "javascript" },
      { nom: "API REST" },
      { nom: "Node.js", logo: "nodejs" },
      { nom: "Express", logo: "express" },
      { nom: "SQLite", logo: "sqlite" }
    ],

    technoTexte: "Le frontend repose sur HTML5, CSS3 et JavaScript natif. Les échanges avec l’API REST sont réalisés avec fetch. Le backend utilise Node.js, Express et SQLite pour gérer les données et les opérations liées aux projets et à l’authentification.",

    competences: "J’ai travaillé sur la manipulation du DOM, les événements JavaScript, les requêtes HTTP et la gestion des réponses de l’API. J’ai également développé la connexion utilisateur, l’affichage conditionnel des fonctionnalités d’administration, le filtrage des projets, la prévisualisation des images et l’envoi de fichiers avec FormData.",

    resultats: "Le site permet de consulter les réalisations de l’architecte, de filtrer les projets par catégorie et d’accéder à une interface d’administration après connexion. Cette interface permet d’ajouter des projets avec une image, un titre et une catégorie, ainsi que de supprimer des réalisations existantes.",

    perspectives: "Le projet pourrait être amélioré par l’ajout de tests automatisés, une validation plus complète du formulaire et une meilleure gestion des erreurs réseau.",

    captures: [],

    liens: {
      github: "https://github.com/Elyse234/Projet3"
    }
  },

  {
    id: "nina-carducci",
    titre: "Nina Carducci",
    sousTitre: "Optimisation SEO, performance et accessibilité",
    description: "Audit et optimisation du site vitrine d'une photographe : performance, SEO et accessibilité.",
    resultat: "Lighthouse : performance de 35 à 64",
    tags: ["SEO", "Lighthouse", "jQuery"],
    legende: "Capture Nina Carducci",
    image: "images/ninca_carducci.png",

    contexte: "Dans le cadre de ma formation chez OpenClassrooms, j’ai travaillé sur l’optimisation du site vitrine d’une photographe professionnelle. La mission consistait à analyser le site existant, identifier les problèmes techniques et améliorer ses performances, son référencement naturel et son accessibilité.",

    objectifs: "L’objectif était de réduire le temps de chargement, d’optimiser les ressources, de corriger les problèmes d’accessibilité et d’améliorer le SEO. Il fallait également corriger les dysfonctionnements de la galerie photo afin de garantir une navigation fluide.",

    technologies: [
      { nom: "HTML5", logo: "html5" },
      { nom: "CSS3", logo: "css" },
      { nom: "JavaScript", logo: "javascript" },
      { nom: "jQuery", logo: "jquery" },
      { nom: "Lighthouse", logo: "lighthouse" },
      { nom: "Chrome DevTools" },
      { nom: "Squoosh" }
    ],

    technoTexte: "Le projet utilise HTML, CSS, JavaScript, jQuery et le plugin MauGallery. Lighthouse, Chrome DevTools et Squoosh ont servi à auditer le site, analyser son fonctionnement et optimiser les images.",

    competences: "J’ai appris à analyser les performances web avec Lighthouse, à compresser et convertir des images au format WebP et à corriger des problèmes JavaScript liés à la galerie. J’ai également travaillé sur le SEO technique, la structure HTML et les bonnes pratiques d’accessibilité.",

    resultats: "Le score Lighthouse de performance est passé de 35 à 52 après la première optimisation des images, puis a atteint 64 lors de l’audit final. Les corrections JavaScript ont également permis d’améliorer la navigation dans la galerie, le filtrage par catégories et l’état actif des boutons.",

    scores: [
      { label: "Performance", valeur: "64" },
      { label: "Accessibilité", valeur: "65" },
      { label: "Bonnes pratiques", valeur: "92" },
      { label: "SEO", valeur: "73" }
    ],

    perspectives: "Les prochaines étapes consisteraient à poursuivre l’optimisation des performances, à traiter les problèmes d’accessibilité restants et à améliorer les éléments SEO. De nouveaux audits et des tests sur différents appareils permettraient de vérifier les progrès et de maintenir la qualité du site.",

    captures: [],

    liens: {
      github: "https://github.com/Elyse234/Projet4"
    }
  },

  {
    id: "kasa",
    titre: "Kasa",
    sousTitre: "Application web de location d’hébergements",
    description: "Application React responsive pour consulter des logements, leurs photos, équipements et descriptions.",
    resultat: "Application monopage responsive",
    tags: ["React", "Sass", "React Router"],
    legende: "Capture Kasa",
    image: "images/kasa.png",

    contexte: "Kasa est un projet réalisé dans le cadre de ma formation en développement web chez OpenClassrooms. Il consiste à développer une application web permettant de consulter des logements à louer et de découvrir leurs caractéristiques à travers une interface moderne et intuitive.",

    objectifs: "L’objectif était de créer une application React responsive, de reproduire les maquettes fournies et de faciliter la navigation entre les différentes pages. Le projet m’a également permis de structurer l’interface à l’aide de composants réutilisables et de gérer les interactions utilisateur.",

    technologies: [
      { nom: "HTML5", logo: "html5" },
      { nom: "CSS3", logo: "css" },
      { nom: "JavaScript", logo: "javascript" },
      { nom: "React", logo: "react" },
      { nom: "React Router", logo: "reactrouter" },
      { nom: "Sass/SCSS", logo: "sass" }
    ],

    technoTexte: "Le projet repose sur React, JavaScript, JSX, React Router et Sass/SCSS. Les informations des logements sont chargées depuis un fichier JSON local.",

    competences: "J’ai développé des composants réutilisables pour afficher les logements, les bannières, les accordéons et les diaporamas d’images. J’ai également mis en place la navigation entre les pages, l’affichage dynamique des données, les interactions d’ouverture et de fermeture des accordéons ainsi que la gestion des logements introuvables.",

    resultats: "Le résultat est une application web monopage permettant de consulter les logements, d’accéder à leurs détails, de parcourir leurs photos et de découvrir les équipements et descriptions. L’interface comprend également une page « À propos », une navigation visuellement active, une page d’erreur et une mise en page responsive.",

    perspectives: "Le projet pourrait être enrichi par une recherche multicritère, des filtres par type de logement ou par équipement, ainsi qu’un système de favoris. Une connexion à une API permettrait également de récupérer les données depuis un service externe plutôt que depuis un fichier JSON local.",

    captures: [],

    liens: {
      github: "https://github.com/Elyse234/Projet5"
    }
  },

  {
    id: "mon-vieux-grimoire",
    titre: "Mon Vieux Grimoire",
    sousTitre: "Une API REST pour gérer et noter des livres",
    description: "Backend d'une application de référencement et de notation de livres, avec authentification et traitement d'images.",
    resultat: "API sécurisée et classement des trois meilleurs livres",
    tags: ["Node.js", "Express", "MongoDB"],
    legende: "Capture Mon Vieux Grimoire",
    image: "images/mon_vieux_grimoire.png",

    contexte: "Dans le cadre de ma formation OpenClassrooms, j’ai développé le backend de Mon Vieux Grimoire, une application de référencement et de notation de livres.",

    objectifs: "L’objectif était de créer une API REST permettant de gérer les livres et les utilisateurs, de sécuriser les opérations et de traiter les images envoyées par les utilisateurs.",

    technologies: [
      { nom: "Node.js", logo: "nodejs" },
      { nom: "Express", logo: "express" },
      { nom: "MongoDB", logo: "mongodb" },
      { nom: "Mongoose", logo: "mongoose" },
      { nom: "JWT", logo: "jwt" },
      { nom: "bcrypt" },
      { nom: "Multer" },
      { nom: "Sharp" }
    ],

    technoTexte: "Le projet utilise Node.js, Express, MongoDB et Mongoose, ainsi que JWT, bcrypt, Multer et Sharp pour l’authentification, la sécurité et le traitement des images.",

    competences: "J’ai développé une API REST permettant d’ajouter, de modifier, de supprimer et de consulter des livres. Elle permet également de gérer les utilisateurs, de sécuriser les opérations et de traiter les images envoyées.",

    resultats: "Le livrable est une API REST connectée à MongoDB, intégrant l’authentification, la gestion des livres, les notations et un classement des trois livres les mieux notés.",

    perspectives: "Le projet pourrait être enrichi par des tests automatisés, une documentation interactive de l’API et une gestion centralisée des erreurs.",

    captures: [],

    liens: {
      github: "https://github.com/Elyse234/Projet6"
    }
  },

  {
    id: "menu-maker",
    titre: "Menu Maker By Qwenta",
    sousTitre: "Préparation et gestion d’un projet",
    description: "Préparation d'un projet web : spécifications techniques, suivi Kanban, planification et veille technologique.",
    resultat: "Livrables de gestion de projet",
    tags: ["Kanban", "Planification", "Veille"],
    legende: "Tableau Kanban",
    sombre: true,
    image: "./assets/images/kanban2.png",

    contexte: "Dans le cadre de ma formation chez OpenClassrooms, j’ai travaillé sur la préparation d’un projet web pour Qwenta, autour de la solution Menu Maker. Le projet m’a permis d’aborder les étapes d’organisation et de planification nécessaires avant le développement d’une application.",

    objectifs: "L’objectif était de transformer les besoins fonctionnels en spécifications techniques, de planifier les tâches et de mettre en place des outils de suivi afin d’organiser efficacement le travail et de suivre l’avancement du projet.",

    technologies: [
      { nom: "Spécifications techniques" },
      { nom: "Kanban" },
      { nom: "Outils de planification" },
      { nom: "Veille technologique" }
    ],

    technoTexte: "Le projet s’appuie sur la rédaction de spécifications techniques, un tableau de suivi des tâches de type Kanban et des outils de planification. Une démarche de veille technologique permet également d’identifier les technologies et les solutions pertinentes pour le projet.",

    competences: "J’ai travaillé sur l’analyse des besoins fonctionnels, la rédaction des spécifications techniques, la décomposition du projet en tâches et la planification des étapes de réalisation. J’ai également développé mes compétences en gestion de projet agile et en organisation d’une veille technologique.",

    resultats: "Le travail produit comprend les livrables de préparation du projet : spécifications techniques, tableau de suivi et outils de planification, ainsi qu’un tableau de veille technologique. Ces éléments constituent une base de travail pour organiser le développement et suivre les tâches à réaliser.",

    perspectives: "La démarche pourrait être enrichie par des points de suivi réguliers, une mise à jour continue et une veille documentée et périodiquement actualisée. Un bilan final permettrait également de comparer la planification initiale avec l’avancement réel du projet.",

    captures: ["./assets/images/kanban3.png","./assets/images/technique1.png","./assets/images/technique2.png"]

    
  }
];

const SOCIAL = {
  github: "https://github.com/Elyse234",
  linkedin: "https://www.linkedin.com/in/elysé-rakotomampiandra-4850471a1/"
};

/* Exportation des données pour main.js */
export { SKILLS, PROJECTS, SOCIAL };
