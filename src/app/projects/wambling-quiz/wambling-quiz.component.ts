import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-wambling-quiz',
  templateUrl: './wambling-quiz.component.html',
  styleUrls: ['./wambling-quiz.component.css']
})
export class WamblingQuizComponent implements OnInit {
  project!: Project;

  constructor(private projectService: ProjectDataService) {}

  ngOnInit(): void {
    this.project = this.projectService.getProjectByTitle('Wambling Quiz')!;
  }
}