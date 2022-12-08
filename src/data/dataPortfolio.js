import IMG0 from "../../src/assets/dessin0.jpg";
import IMG1 from "../../src/assets/dessin1.jpg";
import IMG2 from "../../src/assets/dessin2.jpg";
import IMG3 from "../../src/assets/dessin3.jpg";
import IMG4 from "../../src/assets/dessin4.jpg";
import IMG5 from "../../src/assets/dessin5.jpg";
import IMG6 from "../../src/assets/dessin6.jpg";
import IMG7 from "../../src/assets/dessin7.jpg";
import IMG8 from "../../src/assets/dessin8.jpg";

import {
  faJs,
  faCss3,
  faHtml5,
  faReact,
  faAngular,
  faNode,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

const dataPortfolio = [
  {
    id: 9,
    image: IMG8,
    title: 'Express.js/Mongoose - Test technique "Carnet d\'adresses"',
    git: "https://github.com/A-Pompon/back-wop",
    language: "Le backend est réalisé en Express.js et la DB avec Mongoose.",
    info: "Test technique consistant à créer un serveur en utilisant Node.js et Express.js ainsi qu'une base de données avec Mongoose, afin de créer une API (interface de programmation d’application) RESTful permettant des opérations CRUD (Create, Read, Update and Delete) ainsi qu'un système d'authentification avec hachage de mot de passe et utilisation de tokens.",
    languageIcons: [faNode],
  },
  {
    id: 8,
    image: IMG8,
    title: 'Angular - Test technique "Carnet d\'adresses"',
    git: "https://github.com/A-Pompon/world-of-pangolins",
    language: "Le site est réalisé en Angular & est responsive.",
    info: "Test technique consistant à créer un site avec une interface utilisateur, des tokens, une inscription, une connexion, un jeu, une déconnexion, la possibilité d'ajout en ami, un accès à la liste du classement du jeu et des amis. J'ai ajouté un jeu basé sur le \"Pierre, papier, ciseau\" avec un système de score en fonction du niveau choisit.",
    languageIcons: [faAngular, faJs, faCss3],
  },
  {
    id: 7,
    image: IMG7,
    title: "Test technique WordPress",
    git: "https://github.com/A-Pompon/test-voltaire",
    language: "Le site est réalisé à l'aide de WordPress.",
    info: "Test technique consistant à créer un site Woocommerce avec un article à la vente et totalement responsive. Déploiement sur un VPS. Certification SSL. Utilisation d'un thème enfant du thème storeFront (créer par la même entreprise que WooCommerce). Amélioration du SEO avec une extension. UI design avec Elementor et ses extensions (modification de certains composants directement en CSS). Traduction multi-langue. Responsive design. Formulaire de contact. Gestion des produits (stocks, promotions).",
    languageIcons: [faWordpress, faCss3],
  },
  {
    id: 6,
    image: IMG0,
    title: "React - CV",
    git: "https://github.com/A-Pompon/cv-react",
    language: "Le site est réalisé en React & est responsive.",
    info: "Ce site est une démonstration de l'usage de React et des ses différentes librairies afin de créer un site pour mettre en avant mon CV. On peut y retrouver l'utilisation de react-router-dom, redux, react-icons, swiper, react-fontawesome. Le déploiement est effectué sur github grâce à la librairie gh-pages.",
    languageIcons: [faReact, faJs, faCss3],
  },
  {
    id: 5,
    image: IMG1,
    title: "React Native - MovieDex",
    git: "https://gitlab.com/PomponArnaud/moviedex/-/tree/master",
    language: "L'application est réalisée en React Native & est responsive.",
    info: 'J’ai imaginé la maquette d’une interface utilisateur et, à l’aide de nombreuses librairies disponibles avec React Native, l’ai réalisée en mettant en place une navigation entre les différents "screens", en interagissant avec mon API ainsi qu’une API provenant d’une base de données communautaire afin de créer la fonctionnalité principale qui gère le state global de l’application avec un système d’annotation des films que l’utilisateur aura vu. ',
    languageIcons: [faReact, faJs, faCss3],
  },
  {
    id: 4,
    image: IMG2,
    title: "Express.js/PostgreSQL - Backend de MovieDex",
    git: "https://gitlab.com/PomponArnaud/pocketnews/-/tree/dev",
    language: "Le backend est réalisé en Express.js et la DB avec PostgreSQL.",
    info: "J’ai créé un serveur en utilisant Node.js et Express.js ainsi qu'une base de données avec PostgreSQL, afin de créer une API (interface de programmation d’application) RESTful (style d’architecture logiciel avec un ensemble de contraintes) permettant des opérations CRUD (Create, Read, Update and Delete) ainsi qu'un système d'authentification avec hachage de mot de passe et utilisation de tokens.",
    languageIcons: [faNode],
  },
  {
    id: 3,
    image: IMG3,
    title: "Angular - Shi Fu Mi",
    git: "https://github.com/A-Pompon/Angular-ShiFuMi-IA",
    language: "Le jeu est réalisé en Angular.",
    info: "Ce Shi Fu Mi est réalisé en plusieurs composants, avec un système de différents niveaux qui correspond au nombre de manches à remporter pour gagner la partie. La gestion de services avec un serveur est mise en place à fin d’enregistrer le nombre de victoires et de défaites de l'utilisateur.",
    languageIcons: [faAngular, faJs, faCss3],
  },
  {
    id: 2,
    image: IMG4,
    title: "JS - Tic Tac Toe IA random",
    git: "https://github.com/A-Pompon/TicTacToe/tree/ArnaudP",
    language: "Le jeu est réalisé en JavaScript.",
    info: "Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes. L'IA joue de manière aléatoire.",
    languageIcons: [faJs, faHtml5, faCss3],
  },
  {
    id: 1,
    image: IMG5,
    title: "JS - Tic Tac Toe IA win",
    git: "https://github.com/A-Pompon/TicTacToe-IA-win",
    language: "Le jeu est réalisé en JavaScript.",
    info: "Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes. L'IA est imbattable...",
    languageIcons: [faJs, faHtml5, faCss3],
  },
  {
    id: 0,
    image: IMG6,
    title: "JS - Shi Fu Mi",
    git: "https://github.com/A-Pompon/ShiFuMi-IA",
    language: "Le jeu est réalisé en JavaScript.",
    info: "Shi Fu Mi est un jeu effectué avec les mains et opposant deux joueurs. Les deux joueurs choisissent simultanément un des trois coups possibles en le symbolisant de la main : de façon générale, la pierre bat les ciseaux, les ciseaux battent la feuille, la feuille bat la pierre. Ainsi chaque coup bat un autre coup, fait match nul contre le deuxième (son homologue) et est battu par le troisième.",
    languageIcons: [faJs, faHtml5, faCss3],
  },
];

export default dataPortfolio;
