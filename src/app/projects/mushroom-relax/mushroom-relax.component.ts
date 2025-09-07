import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-mushroom-relax',
  templateUrl: './mushroom-relax.component.html',
  styleUrls: ['./mushroom-relax.component.css']
})
export class MushroomRelaxComponent implements OnInit {
  project!: Project;

  constructor(private projectService: ProjectDataService) {}

  ngOnInit(): void {
    this.project = this.projectService.getProjectByTitle('Mushroom Relax')!;
  }
}