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
  streamlit: boolean = false;
  scikitlearn: boolean = false;
  pandas: boolean = false;
  numpy: boolean = false;
  matplotlib: boolean = false;
  css: boolean = false;
  html: boolean = false;
  dbeaver: boolean = false;
  firebase: boolean = false;
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

    if (this.streamlit) {
      filterTags.push(Tag.STREAMLIT);
      
    }

    if (this.scikitlearn) {
      filterTags.push(Tag.SCIKITLEARN);
      
    }

    if (this.pandas) {
      filterTags.push(Tag.PANDAS);
      
    }

    if (this.numpy) {
      filterTags.push(Tag.NUMPY);
      
    }

    if (this.matplotlib) {
      filterTags.push(Tag.MATPLOTLIB);
      
    }

    if (this.html) {
      filterTags.push(Tag.HTML);
      
    }

    if (this.css) {
      filterTags.push(Tag.CSS);
      
    }

    if (this.firebase) {
      filterTags.push(Tag.FIREBASE);
      
    }

    if (this.dbeaver) {
      filterTags.push(Tag.DBEAVER);
      
    }

    if (this.typescript || this.angular || this.nodejs || this.aws || this.mysql || this.javascript || this.postgresql || this.python || this.render || this.c_plus || this.streamlit || this.scikitlearn || this.pandas || this.numpy || this.matplotlib || this.css || this.html || this.firebase || this.dbeaver) {  
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
    this.streamlit = false;
    this.scikitlearn = false;
    this.pandas = false;
    this.numpy = false;
    this.matplotlib = false;
    this.css = false;
    this.html = false;
    this.firebase = false;
    this.dbeaver = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
  
}
