import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class Motherboard {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    socket!: string;

    @Column()
    chipset!: string;

    @Column()
    memory_slots?: string;

    @Column()
    memory_speed?: string;

    @Column()
    memory_max?: string;

    @Column()
    format?: string;

    @Column({nullable: true})
    image!: string;

    @OneToMany(type => Offer, offer => offer.motherboard) 
    offers!: Offer[];
}