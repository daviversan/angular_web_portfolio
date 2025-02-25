import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationsOpen: boolean = false;
  isSkillsOpen: boolean = false;

 constructor(private titleService: Title, private renderer: Renderer2) {
     this.titleService.setTitle('Davi Versan - Resume');
   }

   DonwloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://www.mediafire.com/file/tnu6m0xjckumv82/Versan-Davi-CV-en.pdf/file');
    link.setAttribute('download', 'Davi_Versan_Resume.pdf');
    link.click();
    link.remove();
   }
}
