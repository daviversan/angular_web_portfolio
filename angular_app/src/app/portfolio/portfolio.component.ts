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

    if (this.typescript || this.angular) {
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
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
  
}
