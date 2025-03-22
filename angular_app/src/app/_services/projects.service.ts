import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "{In development} - Cloud App", pictures: ["../../assets/cloud_logo.png"], projectLink: "https://github.com/orgs/Inteli-College/teams/2025-1a-t13-es05-g02", summary: "Cloud-based web app being built with Angular, Node.js, MySQL and AWS.", description: "This project is currently in development for the institution Centro Paula Souza (CPS), an organization based in São Paulo – Brazil, that is responsible for managing several technical schools and colleges in the State of São Paulo, the Etecs and Fatecs. The goal is to create a web application based on AWS cloud that will gather all CPS’s databases into one platform and retrieve organized information about their students and associated professionals. This will be done using Angular and Node.js frameworks to build the platform, and also MySQL for the database.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.AWS, Tag.MYSQL]},
    {id: 1, name: "IoT Device - Biometric sensor", pictures: ["../../assets/iot_device1.jpg","../../assets/iot_device3.jpg","../../assets/iot_device4.png"], projectLink: "https://github.com/Inteli-College/2024-2B-T14-IN04-G02", summary: "Biometric sensor built with an ESP32 processor with 3D printed case", description: "This project was delivered for Instituto Apontar, an organization based in Rio de Janeiro – Brazil that provides specialized education for children and teenagers diagnosed with High Abilities/Giftedness (HA/GD). The goal was the development of a device that would provide automatized access control to one of the institution’s building entrance. This was accomplished through a biometric sensor embedded in a 3D printed case. The device is powered by an ESP32 microprocessor, that controls several LEDs and an LCD display that indicates user actions and the device’s status.The biometric readings were stored in a PostgreSQL database that could be accessed by the institution’s professionals when needed. A web application was built with the purpose of providing information about the transit of people that used the device to get in or out of the building. It was employed JavaScript for the front end, Python for the back end development, Render for deployment and HiveMQ as the MQTT broker for message communication. Finally, the device’s functionalities were programmed in C++ and its digital prototype was made with the software Wokwi. ", tags: [Tag.JAVASCRIPT, Tag.PYTHON, Tag.RENDER, Tag.POSTGRESQL, Tag.C_PLUS,]},
    {id: 2, name: "Predictive Model", pictures: ["../../assets/feature_importance.png","../../assets/primeiros_gols.png"], projectLink: "https://github.com/Inteli-College/2024-2A-T14-IN03-G01/tree/main", summary: "Data science project with Python to predict soccer matches statistics ", description: "This project was built in partnership with IBM with the goal of developing a predictive model to retrieve statistical information and analysis about the Brazilian soccer championship of the 2024 season. To accomplish this task,  several machine learning models were trained in order to gather metrics around the players, teams and previous matches results. Through an ETL method, the datasets were cleaned, processed and organized into Jupyter Notebooks, following Exploratory Data Analysis (EDA) common principles. The main data science libraries used consisted of Scikit-learn, Pandas, Numpy and Matplotlib. After the training data was ready, it was developed Random Forest algorithms for classification and regression to validate the model's accuracy in predicting the matches' final scores and the first teams to score a point. Finally, the statistical analysis was displayed in a website built with the Python framework Streamlit. ", tags: [Tag.PYTHON, Tag.STREAMLIT, Tag.SCIKITLEARN, Tag.PANDAS, Tag.NUMPY, Tag.MATPLOTLIB]},
    {id: 3, name: "Web App with analytics", pictures: ["../../assets/homepage_p2.jpg","../../assets/tela_adm.png", "../../assets/wireframes.jpg"], projectLink: "https://github.com/InteliProjects/2024-1B-T14-IN02-G05", summary: "Web app focused in registration and data recovery for corporate applications ", description: "This project was delivered for INSPA (Instituto de Psicologia Animal), a Brazilian institution that provides professional courses related to animal psychology and education, especially for dogs and other pets. The main goal was to build a website that would host several forms to gather information about tutors, in order to research abandonment of dogs and provide resources to sustain campaigns to eradicate this behavior, thus the projects’ name, “Abandono Zero”. The data fed to the website was stored in a PostgreSQL database and orchestrated with the software DBeaver. The application was entirely built using HTML, CSS and JavaScript, altogether with firebase to create the backend., following the MVC (Model-View-Controller) framework. Finally, the web app was deployed on Render. ", tags: [Tag.CSS, Tag.HTML, Tag.JAVASCRIPT, Tag.RENDER, Tag.POSTGRESQL, Tag.FIREBASE, Tag.DBEAVER]},
    {id: 4, name: "Web-based game with JavaScript", pictures: ["../../assets/meta_tower.jpeg", "../../assets/face_floor.png", "../../assets/inta_floor.png"], projectLink: "https://github.com/InteliProjects/2024-T0014-IN01-G02", summary: "Digital game available for browsers, to assist trainings in institutions", description: "This project was delivered for Meta with the goal of teaching it’s colaborators about the hiring process of diverse suppliers, as part of the company’s Diversity, Equity and Inclusion programs, through a gamefied solution. The game was made using Phaser.js, a JavaScript framework for web game development, HTML and CSS. This project is part of the first module of Inteli’s first year common curriculum, and its purpose is to introduce programming logic and game design principles to the students. ", tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.NODEJS, Tag.AWS, Tag.MYSQL]},

  ];
  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new Error('Project not found');
    }

    return project;
  }

  GetProjectsByFilter(filterTags: Tag[]) {
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project) {
      let foundAll = true;

      filterTags.forEach(function(filterTag) {
        if (project.tags.includes(filterTag) == false) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }
}
