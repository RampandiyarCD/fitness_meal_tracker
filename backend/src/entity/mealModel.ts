import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./userModel";

@Entity()
export default class Meals {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.id)
  user_id: User;

  @Column()
  image: string;

  @Column()
  calories: number;

  @Column("enum", { enum: ["breakfast", "lunch", "dinner", "snack"] })
  meal_type: "breakfast" | "lunch" | "dinner" | "snack";

  @Column()
  quantity: number;

  @Column("date")
  date: string;

  @Column("time")
  time: string;
}
