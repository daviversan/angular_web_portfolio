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
    {id: 2, name: "Sample Angular App", pictures: ["../../assets/python_img.jpg","../../assets/python_img.jpg","../../assets/python_img.jpg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},

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
