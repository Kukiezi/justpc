import express, { Request, Response } from "express";
import next from "next";
import { createConnection } from "typeorm";
import { Processor } from "./entity/Processor";
import { Motherboard } from "./entity/Motherboard";
import { GPU } from "./entity/GPU";
import { CPUCooler } from "./entity/CPUCooler";
import { PCCase } from "./entity/PCCase";

var bodyParser = require('body-parser')
var cookieParser = require("cookie-parser");


const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

app.prepare()
    .then(() => {
        createConnection()
            .then(connection => {
                const processorRepository = connection.getRepository(Processor);
                const motherboardRepository = connection.getRepository(Motherboard);
                const gpuRepository = connection.getRepository(GPU);
                const cpuCoolerRepository = connection.getRepository(CPUCooler);
                const pcCaseRepository = connection.getRepository(PCCase);

                const server = express();

                var jsonParser = bodyParser.json()

                server.use(cookieParser())

                server.get("/api/v1/processors", async function(req: Request, res: Response) {
                    const processors = await processorRepository.findOne(270);
                    res.json(processors);
                });

                server.post("/list/add/processor", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    if (req.cookies.items) {
                        req.cookies.items["processor"] = req.body.processor["processor"];
                    
                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    } else {
                        res.cookie('items', req.body.processor, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }

                    res.json("Added Sucesfully")
                });

                server.post("/list/add/motherboard", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    if (req.cookies.items) {
                        req.cookies.items["motherboard"] = req.body.motherboard["motherboard"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    } else {
                        res.cookie('items', req.body.motherboard, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Added Sucesfully")
                });

                server.post("/list/add/gpu", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    if (req.cookies.items) {
                        req.cookies.items["gpu"] = req.body.gpu["gpu"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    } else {
                        res.cookie('items', req.body.gpu, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Added Sucesfully")
                });

                server.post("/list/add/cpuCooler", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    if (req.cookies.items) {
                        req.cookies.items["cpuCooler"] = req.body.cpuCooler["cpuCooler"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    } else {
                        res.cookie('items', req.body.cpuCooler, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Added Sucesfully")
                });

                server.post("/list/add/pcCase", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    if (req.cookies.items) {
                        req.cookies.items["pcCase"] = req.body.pcCase["pcCase"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    } else {
                        res.cookie('items', req.body.pcCase, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Added Sucesfully")
                });

                server.get("/list/getItems", (req, res) =>  {
                    res.json(req.cookies.items) 
                });

                // server.get("/api/v1/procesory", async function(req: Request, res: Response) {
                //     const processors = await processorRepository.createQueryBuilder("processor")
                //     .innerJoinAndSelect("processor.offers", "offer")
                //     .getMany();
                //     res.json(processors);
                // });

                server.get("/api/v1/motherboards", async function(req: Request, res: Response) {
                    const motherboards = await motherboardRepository.createQueryBuilder("motherboard")
                    .innerJoinAndSelect("motherboard.offers", "offer")
                    .getMany();
                    res.json(motherboards);
                });

                server.get("/api/v1/gpus", async function(req: Request, res: Response) {
                    const gpus = await gpuRepository.createQueryBuilder("gpu")
                    .innerJoinAndSelect("gpu.offers", "offer")
                    .getMany();
                    res.json(gpus);
                });

                server.get("/api/v1/cpuCoolers", async function(req: Request, res: Response) {
                    const cpuCoolers = await cpuCoolerRepository.createQueryBuilder("cpu_cooler")
                    .innerJoinAndSelect("cpu_cooler.offers", "offer")
                    .getMany();
                    res.json(cpuCoolers);
                });

                server.get("/api/v1/pcCase", async function(req: Request, res: Response) {
                    const pcCases = await pcCaseRepository.createQueryBuilder("pc_case")
                    .innerJoinAndSelect("pc_case.offers", "offer")
                    .getMany();
                    res.json(pcCases);
                });

                server.get("/api/v1/procesory", async function(req: Request, res: Response) {
                    const processors = await processorRepository.createQueryBuilder("processor")
                    .innerJoinAndSelect("processor.offers", "offer")
                    .getMany();
                    res.json(processors);
                });
                
                server.delete("/api/v1/processor", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    
                    if (req.cookies.items) {
                        delete req.cookies.items["processor"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Deleted Sucesfully")
                });
                
                server.delete("/api/v1/motherboard", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    
                    if (req.cookies.items) {
                        delete req.cookies.items["motherboard"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Deleted Sucesfully")
                });
                
                server.delete("/api/v1/gpu", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    
                    if (req.cookies.items) {
                        delete req.cookies.items["gpu"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Deleted Sucesfully")
                });
                
                server.delete("/api/v1/cpuCooler", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    
                    if (req.cookies.items) {
                        delete req.cookies.items["cpuCooler"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Deleted Sucesfully")
                });

                server.delete("/api/v1/pcCase", jsonParser, (req, res) => {
                    const oneDayToSeconds = 1 * 24 * 60 * 60 * 1000;
                    
                    if (req.cookies.items) {
                        delete req.cookies.items["pcCase"];

                        res.cookie('items', req.cookies.items, {
                            maxAge: oneDayToSeconds,
                            httpOnly: true,
                            secure: false
                        });
                    }
                 
                    res.json("Deleted Sucesfully")
                });

                server.get('/counter', (req, res) => {
                    const actualPage = '/counter'
                    const queryParams = { name: "Dawid" }
                    app.render(req, res, actualPage, queryParams)
                });

                server.get('/produkty/procesor', (req, res) => {
                    const actualPage = '/produkty/procesor'
                    const queryParams = { name: "Dawid" }
                    app.render(req, res, actualPage, queryParams)
                });


                server.get('/v1/test', (req, res) => {
                    res.json("testtest");
                });

                server.get('*', (req: Request, res: Response) => {
                    return handle(req, res);
                });

                server.listen(3000, (err?: any) => {
                    if (err) throw err;
                    console.log('> Ready on http://localhost:3000')
                });
            })
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });