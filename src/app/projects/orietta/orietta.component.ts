import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-orietta',
  templateUrl: './orietta.component.html',
  styleUrls: ['./orietta.component.css']
})
export class OriettaComponent implements OnInit {
  project!: Project;

  constructor(private projectService: ProjectDataService) {}

  ngOnInit(): void {
    this.project = this.projectService.getProjectByTitle('Orietta is you!')!;
  }
}