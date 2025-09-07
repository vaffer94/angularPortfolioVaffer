import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-eat-boat',
  templateUrl: './eat-boat.component.html',
  styleUrls: ['./eat-boat.component.css']
})
export class EatBoatComponent implements OnInit {
  project!: Project;

  constructor(private projectService: ProjectDataService) {}

  ngOnInit(): void {
    this.project = this.projectService.getProjectByTitle('Eat Boat')!;
  }
}