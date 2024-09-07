import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export class Num extends BaseEntity {
  
  constructor(data?: Partial<Num>){
    super();
    Object.assign(this, data);
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  num: number
}