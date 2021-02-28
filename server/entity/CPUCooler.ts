import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class CPUCooler {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    rpm!: string;

    @Column()
    noise!: string;

    @Column()
    compatibility!: string;

    @Column({nullable: true})
    image!: string;

    @OneToMany(type => Offer, offer => offer.cpucooler) 
    offers!: Offer[];
}