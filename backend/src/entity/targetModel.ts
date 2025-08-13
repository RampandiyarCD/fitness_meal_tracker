// Daily Goals
// -id
// -user_id
// -target_calories
// -date

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./userModel";

@Entity()
export default class Target{
    @PrimaryGeneratedColumn()
    id:string;

    @ManyToOne(()=>User,(user)=>user.id)
    user_id:User;

    @Column()
    target_calorier:number;

    @Column({type:"date"})
    date:string;
}