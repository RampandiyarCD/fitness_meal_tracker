import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column("enum", {
    enum: ["Weight loss", "Weight gain", "Maintenance"],
    nullable: true,
  })
  scope: "Weight loss" | "Weight gain" | "Maintenance";

  @Column("float", { nullable: true })
  height: number;

  @Column("float", { nullable: true })
  weight: number;

  @Column("enum", {
    enum: ["Veg", "Non-veg"],
    nullable: true,
  })
  eating_habit: "Veg" | "Non-veg";

  @Column("float", { nullable: true })
  target: number;

  @Column({ nullable: true })
  image: string;
}
