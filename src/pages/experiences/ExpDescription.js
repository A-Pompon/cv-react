import React from "react";
import CODIN from "../../assets/codingame.pdf";
import "../../styles/expDescri.css";

const ExpDescription = () => {
  return (
    <section className="container description__container">
      <div className="codinGame">
        <h2>Résultat du CodinGame du : 02/03/2022.</h2>
        <a href={CODIN} download className="btn btn-primary">
          Download CondinGame
        </a>
      </div>
      <div className="movieDex">
        <h2>Stage Développeur Web Fullstack</h2>
        <h3>DAMIEN | Septembre - Novembre 2021</h3>
        <p>
          Durant mon stage en entreprise, chez DAMIEN, j’ai été en charge de
          créer une application mobile template que l’on nommera « MovieDex ».
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
