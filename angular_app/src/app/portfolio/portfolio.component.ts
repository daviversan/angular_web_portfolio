import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  project: Project = {
    id: 0,
    name: 'Sample Angular App',
    summary: 'Summary',
    description: '',
    projectLink: '',
    tags: [Tag.ANGULAR, Tag.TYPESCRIPT],
    pictures: []

  };

  constructor(private titleService: Title) {
    this.titleService.setTitle('Davi Versan - Portfolio');
  }
  
}
