import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectEntity } from '../entity/project.entity';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAllProjects(): Promise<ProjectEntity[]> {
    return this.projectService.getAll();
  }
}
