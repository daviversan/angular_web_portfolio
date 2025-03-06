import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  projects = [] as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  nodejs: boolean = false;
  aws: boolean = false;
  mysql: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  render: boolean = false;
  postgresql: boolean = false;
  c_plus: boolean = false;
  filtering: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Davi Versan - Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }

    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }

    if (this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }

    if (this.aws) {
      filterTags.push(Tag.AWS);
    }

    if (this.mysql) {
      filterTags.push(Tag.MYSQL);
    }

    if (this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }

    if (this.postgresql) {
      filterTags.push(Tag.POSTGRESQL);
    }

    if (this.python) {
      filterTags.push(Tag.PYTHON);
    }

    if (this.render) {
      filterTags.push(Tag.RENDER);

    }

    if (this.c_plus) {
      filterTags.push(Tag.C_PLUS);
      
    }

    if (this.typescript || this.angular || this.nodejs || this.aws || this.mysql || this.javascript || this.postgresql || this.python || this.render || this.c_plus)   {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.nodejs = false;
    this.aws = false;
    this.mysql = false;
    this.javascript = false;
    this.python = false;
    this.render = false;
    this.postgresql = false;
    this.c_plus = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
  
}
