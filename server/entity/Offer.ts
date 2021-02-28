import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import { Motherboard } from "./Motherboard";
import { Processor } from "./Processor";
import { GPU } from "./GPU";
import { CPUCooler } from "./CPUCooler";

@Entity()
export class Offer {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    shop!: string;

    @Column()
    link!: string

    @Column()
    original_price!: number

    @Column()
    current_price!: number

    @ManyToOne(type => Processor, processor => processor.offers) 
    processor?: Processor;

    @ManyToOne(type => Motherboard, motherboard => motherboard.offers) 
    motherboard?: Motherboard;

    @ManyToOne(type => GPU, gpu => gpu.offers) 
    gpu?: GPU;
    
    @ManyToOne(type => CPUCooler, cpucooler => cpucooler.offers) 
    cpucooler?: CPUCooler;
}