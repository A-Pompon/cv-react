import React from "react";
import CODIN from "../../assets/codingame.pdf";
import "../../styles/expDescri.css";

const ExpDescription = () => {
  return (
    <section className="container description__container">
      <div className="experiences">
        <h2>Alternance Développeur Web Fullstack</h2>
        <h3>DATANOW | Mars 2023 - Mai 2024</h3>
        <small>Frontend : React - Typescript</small>
        <small>Backend : Scala - Play Framework</small>
        <small>Database : PostgreSQL | Docker</small>
        <p>
          Au sein de la start-up DATANOW, j'ai participé à la refonte générale
          de l'application web en tant que développeur fullstack.
        </p>
        <p>
          J'ai implémenté le design en m'appuyant sur les maquettes Figma et en
          utilisant des technologies comme Material-UI et Minimals. J'étais
          responsable du choix et des tests de diverses librairies (comme
          @mui/x-data-grid-premium, @hello-pangea/dnd, chart.js, etc.) et, après
          validation, de leur implémentation. J'ai également créé plusieurs
          contextes avec useContext, développé des tables et leurs end-points
          associés, que j'ai ensuite testés avec Postman. Enfin, j'ai mis en
          place des tests techniques avec Cypress pour assurer la qualité du
          code.
        </p>
        <p>
          Exemple de travail effectué sur la partie de l'application comprenant
          une IA :
        </p>
        <p>
          La possibilité de création/suppression/modification d’un dashboard
          composé d’un canva où apparaît des cartes représentant :
        </p>
        <div>
          <ul>
            <li>
              Soit une visualisation graphique de la question posée à l’IA
              (parmi 5 graphiques différents)
            </li>
            <li>
              Soit les paramètres de la question posée (tables sélectionnées et
              question posée à l’IA) et donc la possibilité de modifier les
              paramètres de la question
            </li>
            <li>
              Soit une visualisation dans un éditeur de texte SQL pour afficher
              le code SQL représentant la réponse de l’IA
            </li>
            <li>
              Soit une visualisation sous forme d’un tableau de la data contenue
              dans les tables sélectionnées
            </li>
            <li>
              Soit une visualisation d’une carte avec seulement un nombre dedans
            </li>
            <li>
              Soit une visualisation d’une carte de texte qui permet à
              l’utilisateur de structurer son Dashboard selon ses besoins
            </li>
            <li>
              Le champ de texte doit avoir un système d’autocomplétion pour
              sélectionner les tables
            </li>
            <li>La possibilité de supprimer, modifier le titre de la carte</li>
            <li>
              Chaque carte pourra être déplacée sur le canva par un système de
              drag and drop et redimensionnée sur le canva
            </li>
          </ul>
        </div>
        <p>
          Au cours de mon alternance au sein de Datanow, j'ai eu l'opportunité
          de participer à la mise en place d'une méthodologie agile au sein de
          l'équipe de développement. Cette démarche a permis d'améliorer notre
          processus de travail et de renforcer la collaboration au sein de
          l'équipe.
        </p>
      </div>
      <div className="codinGame">
        <h2>Résultat du CodinGame du : 02/03/2022.</h2>
        <a href={CODIN} download className="btn btn-primary">
          Download CondinGame
        </a>
      </div>
      <div className="experiences">
        <h2>Stage Développeur Web Fullstack</h2>
        <h3>DAMIEN | Septembre - Novembre 2021</h3>
        <small>Frontend : React Native</small>
        <small>Backend : Node - Express</small>
        <small>Database : PostgreSQL</small>
        <p>
          Durant mon stage en entreprise, chez DAMIEN, j’ai été en charge de
          créer une application mobile template que l’on nommera « experiences
          ».
        </p>
        <p>
          Cette application sera développé pour Android, elle aura pour but
          d’avoir une interface utilisateur et d'interagir avec mon API ainsi
          qu’une API provenant d’une base de données communautaire afin de créer
          la fonctionnalité principale qui gère le state global de l’application
          avec un système d’annotation des films que l’utilisateur aura vus.
        </p>
        <p>
          Avec Ubuntu comme système d’exploitation, dans un premier temps j’ai
          travaillé sur le backend en créant une base de données avec
          PostgreSQL, Dbeaver comme système de gestion de base de données et
          psql comme terminal interactif. J’ai ensuite créé un serveur en
          utilisant Node.js et Express.js, qui est un framework reposant sur
          Node qui facilite la création et la gestion des serveurs Node, afin de
          créer une API (interface de programmation d’application) RESTful
          (style d’architecture logiciel avec un ensemble de contraintes)
          permettant des opérations CRUD (Create, Read, Update and Delete). J'ai
          mis en place un système d'authentification avec hachage de mot de
          passe et l'utilisation de tokens. J’ai utilisé principalement Postman
          pour exécuter des appels HTTP afin d’appeler / tester mon API.
        </p>
        <p>
          Dans un second temps, concernant la partie frontend du cahier des
          charges, j’ai travaillé avec React Native qui est un framework, créé
          par Facebook, permettant de créer des applications mobiles
          cross-platforms. J’ai imaginé la maquette d’une interface utilisateur
          et, à l’aide de nombreuses librairies disponibles avec React Native,
          l’ai réalisée en mettant en place une navigation entre les différents
          "screens", en interagissant avec mon API ainsi qu’une API provenant
          d’une base de données communautaire afin de créer la fonctionnalité
          principale qui gérerait le state global de l’application.
        </p>
      </div>
    </section>
  );
};

export default ExpDescription;
