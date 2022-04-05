import IMG0 from "../../src/assets/dessin0.jpg";
import IMG1 from "../../src/assets/dessin1.jpg";
import IMG2 from "../../src/assets/dessin2.jpg";
import IMG3 from "../../src/assets/dessin3.jpg";
import IMG4 from "../../src/assets/dessin4.jpg";
import IMG5 from "../../src/assets/dessin5.jpg";

import {
  faJs,
  faCss3,
  faHtml5,
  faReact,
  faAngular,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

const dataPortfolio = [
  {
    id: 0,
    image: IMG0,
    title: "React - CV",
    git: "https://github.com/A-Pompon/cv-react",
    language: "Le site est réalisé en React & est responsive.",
    info: "Ce site est une démonstration de l'usage de React et des ses différentes librairies à fin de créer un site pour mettre en avant mon CV. On peut y retrouver l'utilisation de react-router-dom, redux, react-icons, swiper, react-fontawesome.",
    languageIcons: [faReact, faJs, faCss3],
  },
  {
    id: 1,
    image: IMG1,
    title: "React Native - MovieDex",
    git: "https://gitlab.com/PomponArnaud/moviedex/-/tree/master",
    language: "L'application est réalisé en React Native & est responsive.",
    info: "J’ai imaginé la maquette d’une interface utilisateur et, à l’aide de nombreuses librairies disponibles avec React Native, l’ai réalisé en mettant en place une navigation entre les différents « screens », en interagissant avec mon API ainsi qu’une API provenant d’une base de données communautaire afin de créer la fonctionnalité principale qui gère le state global de l’application avec un système d’annotation des films que l’utilisateur aura vu . ",
    languageIcons: [faReact, faJs, faCss3],
  },
  {
    id: 2,
    image: IMG2,
    title: "Express.js - Backend de MovieDex",
    git: "https://gitlab.com/PomponArnaud/pocketnews/-/tree/dev",
    language: "Le backend est réalisé en Express.js et la DB en PostgreSQL.",
    info: "J’ai créé un serveur en utilisant Node.js et Express.js ainsi qu'une base de données avec PostgreSQ , afin de créer une API (interface de programmation d’application) RESTful (style d’architecture logiciel avec un ensemble de contraintes) permettant des opérations CRUD (Create, Read, Update and Delete) ainsi qu'un système d'authentification avec hachage de mot de passe et utilisation de tokens.",
    languageIcons: [faNode],
  },
  {
    id: 3,
    image: IMG3,
    title: "Angular - Shi Fu Mi",
    git: "https://github.com/A-Pompon/Angular-ShiFuMi-IA",
    language: "Le jeu est réalisé en Angular.",
    info: "Ce Shi Fu Mi est réalisé en plusieurs composants, avec un système de différents niveaux qui correspond au nombre de manches à remporter pour gagner la pIMGie. La gestion de services avec un serveur est mise en place à fin d’enregistrer le nombre de victoires et de défaites de l'utilisateur.",
    languageIcons: [faAngular, faJs, faCss3],
  },
  {
    id: 4,
    image: IMG4,
    title: "JS - Tic Tac Toe IA random",
    git: "https://github.com/A-Pompon/TicTacToe/tree/ArnaudP",
    language: "Le jeu est réalisé en JavaScript.",
    info: "Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes. L'IA joue de manière aléatoire.",
    languageIcons: [faJs, faHtml5, faCss3],
  },
  {
    id: 5,
    image: IMG5,
    title: "JS - Tic Tac Toe IA win",
    git: "LIEN VERS PROJET",
    language: "Le jeu est réalisé en JavaScript.",
    info: "Deux joueurs posent tour à tour un rond, pour l'un, une croix, pour l'autre, dans une grille de 3 cases par 3. Le but du jeu est d'obtenir un alignement (en ligne, colonne ou diagonale) de ses trois signes. L'IA est imbattable...",
    languageIcons: [faJs, faHtml5, faCss3],
  },
  {
    id: 6,
    image: IMG5,
    title: "JS - Shi Fu Mi",
    git: "LIEN VERS PROJET",
    language: "Le jeu est réalisé en JavaScript.",
    info: "Shi Fu Mi est un jeu effectué avec les mains et opposant deux joueurs. Les deux joueurs choisissent simultanément un des trois coups possibles en le symbolisant de la main : de façon générale, la pierre bat les ciseaux, les ciseaux battent la feuille, la feuille bat la pierre. Ainsi chaque coup bat un autre coup, fait match nul contre le deuxième (son homologue) et est battu par le troisième.",
    languageIcons: [faJs, faHtml5, faCss3],
  },
];

export default dataPortfolio;
