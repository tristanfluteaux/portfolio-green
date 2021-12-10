import { Cell, Grid } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

import "./AboutMe.css";

const AboutMe = ({ gradientColor }) => {
  return (
    <div
      className={gradientColor ? "about-main" : "about-main-dm"}
      id="about-main"
    >
      <Grid>
        <Cell col={4}>
          <div style={{ textAlign: "center" }}></div>
          <h2 style={{ paddingTop: "2em" }}>Tristan Fluteaux</h2>
          <h4 style={{ color: "#833fb2" }}>Fullstack Web Developper</h4>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <p></p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Location</h5>
          <p className="text">Meaux, proche Paris</p>
          <h5>Email</h5>
          <p className="text">tristan.fluteaux@gmail.com</p>
          <h5>Phone</h5>
          <p className="text">06.89.79.78.45</p>
          <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          <h5>Langages</h5>
          <p className="text">Français / Anglais</p>
        </Cell>
        <Cell className="about-right" col={8}>
          <h2>Présentation</h2>
          <div className="about-me">
            <p>
              Ancien technicien de maintenance passionné par le monde du
              numérique, stimulé par de nouveaux défis et animé par l’envie de
              rejoindre un univers qui depuis toujours me passionne, j’ai décidé
              d’entreprendre une reconversion professionnelle en tant que
              Développeur web spécialisé JS au sein de la Wild Code School.
            </p>
          </div>
          <hr style={{ borderTop: "3px solid #fff" }} />
          <h2>Formations</h2>
          <Education
            startYear={2021}
            school={"Wild Code School (remote)"}
            description={
              "HTML / CSS, JavaScript, React, Node.Js, MySql, Express, Méthodes agiles (scrum), Git, Github, Figma."
            }
          />

          <Education
            startYear={"2013 - 2015"}
            school={"CFI de Paris Gambetta"}
            description={"BTS Fluides energies Environnement"}
          />
          <Education
            startYear={"2010 - 2013"}
            school={"Lycée Pierre de Coubertin"}
            description={"Bac professionnel Electrotechnique"}
          />

          <hr style={{ borderTop: "3px solid #fff" }} />
          <h2>Experiences</h2>
          <Experience
            startYear={"2021"}
            job={`Quavy - Développeur web Front end React`}
            jobDescription={`Développement de l'application Quavy sur React/Nextjs. Plateforme pouvant receuillir des vidéos de la plateforme Twitch, de les éditer pour ensuite les republier sur différents réseaux sociaux automatiquement`}
          />
          <Experience
            startYear={"2021"}
            job={`La Boîte d'à Côté - Développeur web Fullstack`}
            jobDescription={`Création d'un site sur React pour le client réel La Boîte d'à côté, entreprise à but d'emploi,  gestion de la relation client et organisation du projet via les méthodes agiles (scrum) avec modélisation de la base de données et configuration d'un serveur back-end sur Node.Js afin d'ajouter une connexion admin pour modifier le contenu du site depuis un interface.`}
          />
          <Experience
            startYear={"2021"}
            job={"Hackathon Game Jam"}
            jobDescription={`Création d'un jeu vidéo intéractif 2D en 45h en équipe sur Unity avec le langage C# et gestion du projet via GitHub`}
          />
          <Experience
            startYear={"2021"}
            job={"Hackathon StarLove"}
            jobDescription={`Création d'un site de rencontre intergalactique sur le thème de star wars en 35h en suivant les méthodes agiles (scrum) sur React avec une consommation d'api REST`}
          />
          <Experience
            startYear={"2021"}
            job={"Kokomo - Développeur web front-end"}
            jobDescription={`Création d'une application responsive de cocktail avec React et NodeJs en utilisant une consommation d'api REST et organisation du projet avec les méthodes agiles (scrum)`}
          />
          <Experience
            startYear={"2021"}
            job={"WeCode - Développeur web front-end"}
            jobDescription={`Création d'un site vitrine responsive en rapport au monde du numérique en HTML, CSS et JavaScript`}
          />
          <Experience
            startYear={"2016 - 2021"}
            job={"Sodexo Energie et Maintenance - technicien principal"}
            jobDescription={
              "Relation cient, suivi de projet et de travaux, force de conseil et de proposition."
            }
          />
          <hr style={{ borderTop: "3px solid #fff" }} />
          <h2>Compétences</h2>

          <Skills progress={0} buffer={0} />

          <hr style={{ borderTop: "3px solid #fff" }} />
          <h2>Mes centres d'intérêt</h2>
          <div className="about-me">
            <p>Musique : Guitariste et Bassiste</p>
            <p>Jeux vidéo : Aventure, RPG, Multijoueur, Survival</p>
            <p>
              Cinématographie : Science-Fiction, Animation, Horreur, Aventure,
              AutoBio musicale
            </p>
            <p>Informatique : Enregistrement et composition de musique MAO</p>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default AboutMe;
