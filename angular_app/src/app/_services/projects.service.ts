import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project[] = [
    {id: 0, name: "Sample Python Project", pictures: ["../../assets/python_img.jpg","../../assets/python_img.jpg","../../assets/python_img.jpg"], projectLink: "//www.github.com", summary: "Python project that analyzes stock market data.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR]},
    {id: 1, name: "Sample Angular App", pictures: ["../../assets/python_img.jpg","../../assets/python_img.jpg","../../assets/python_img.jpg"], projectLink: "//www.github.com", summary: "Fullstack web app developed using Angular and Node.JS", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.ANGULAR, Tag.TYPESCRIPT]},
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
