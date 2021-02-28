import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class GPU {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    chipset!: string;

    @Column()
    memory?: string;

    @Column()
    core_clock!: string;

    @Column()
    boost_clock?: string;

    @Column({nullable: true})
    image!: string;

    @OneToMany(type => Offer, offer => offer.gpu) 
    offers!: Offer[];
}