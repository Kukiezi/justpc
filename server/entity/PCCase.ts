import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from "typeorm";
import { Offer } from "./Offer";

@Entity()
export class PCCase {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    cabinbet_type!: string;

    @Column()
    side_panel!: string;

    @Column({nullable: true})
    image!: string;

    @OneToMany(type => Offer, offer => offer.pccase) 
    offers!: Offer[];
}