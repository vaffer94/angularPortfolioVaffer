import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-bubble-it',
  templateUrl: './bubble-it.component.html',
  styleUrls: ['./bubble-it.component.css']
})
export class BubbleItComponent implements OnInit {
  project!: Project;

  constructor(private projectService: ProjectDataService) {}

  ngOnInit(): void {
    this.project = this.projectService.getProjectByTitle('Bubble it!')!;
  }
}