import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class Processor {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    series!: string;

    @Column()
    cores!: number;

    @Column()
    core_clock!: string;

    @Column()
    boost_clock?: string;

    @Column()
    socket!: string;

    @Column()
    integrated_graphics!: string;

    @Column()
    includes_cooler!: string;

    @Column()
    cache_memory!: string;

    @Column({nullable: true})
    image!: string;

    @OneToMany(type => Offer, offer => offer.processor) 
    offers!: Offer[];
}