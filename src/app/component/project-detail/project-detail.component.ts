import { Component, Input } from '@angular/core';
import { Project } from '../../model/project.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent {
    @Input() project!: Project;

    constructor(private sanitizer: DomSanitizer) {}

  getYoutubeEmbedUrl(url: string): SafeResourceUrl {
    let videoId = '';

    if (url.includes('shorts/')) {
      videoId = url.split('shorts/')[1].split('?')[0];
    } else if (url.includes('v=')) {
      videoId = url.split('v=')[1].split('&')[0];
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}
