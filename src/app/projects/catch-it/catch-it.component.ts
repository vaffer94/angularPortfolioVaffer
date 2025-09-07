import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-catch-it',
  templateUrl: './catch-it.component.html',
  styleUrls: ['./catch-it.component.css']
})
export class CatchItComponent implements OnInit {
  project!: Project;

  constructor(private projectService: ProjectDataService) {}

  ngOnInit(): void {
    this.project = this.projectService.getProjectByTitle('Catch it!')!;
  }
}
