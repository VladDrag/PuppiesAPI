// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Puppy from "../models/puppies";

// Global Config
export const puppiesRouter = express.Router();

puppiesRouter.use(express.json());

// GET
puppiesRouter.get("/", async (_req: Request, res: Response) => {
    try {
       const puppies = (await collections.puppies!.find({}).toArray()) as Puppy[];

        res.status(200).send(puppies);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

puppiesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        
        const query = { _id: new ObjectId(id) };
        const puppy = (await collections.puppies!.findOne(query)) as Puppy;

        if (puppy) {
            res.status(200).send(puppy);
        }
    } catch (error) {
        res.status(404).send(`Unable to find matching document with id: ${req.params.id}`);
    }
});
// POST

puppiesRouter.post("/", async (req: Request, res: Response) => {
    try {
        const newPuppy = req.body as Puppy; // TREBUIE SA FAC EU UN PUPPY MODEL
        const result = await collections.puppies!.insertOne(newPuppy);

        result
            ? res.status(201).send(`Successfully created a new puppy with id ${result.insertedId}`)
            : res.status(500).send("Failed to create a new puppy.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

// PUT

puppiesRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedPuppy: Puppy = req.body as Puppy;
        const query = { _id: new ObjectId(id) };
      
        const result = await collections.puppies!.updateOne(query, { $set: updatedPuppy });

        result
            ? res.status(200).send(`Successfully updated puppy with id ${id}`)
            : res.status(304).send(`Puppy with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

// DELETE

puppiesRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.puppies!.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed puppy with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove puppy with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Puppy with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});