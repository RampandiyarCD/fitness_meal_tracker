import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./userModel";

@Entity()
export default class Meals {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name?: string;

  @ManyToOne(() => User, (user) => user.id)
  user_id?: User;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  calories?: number;

  @Column("enum", { enum: ["breakfast", "lunch", "dinner", "snack"] })
  meal_type?: "breakfast" | "lunch" | "dinner" | "snack";

  @Column({ nullable: true })
  quantity?: number;

  @Column("date")
  date?: string;

  @Column("enum", { enum: ["8:00 AM", "1:00 PM", "8:00 PM", "11:00 AM"] })
  time?: string;
}
