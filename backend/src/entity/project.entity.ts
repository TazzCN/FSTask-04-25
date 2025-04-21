import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('projects')
export class ProjectEntity {
 @PrimaryColumn('text')
  id: string;

  @Column('text')
  url: string;

  @Column('text')
  status: string;

  @Column('text')
  country: string;
}