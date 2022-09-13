import app from './app';
import { connectToDatabase } from "./src/services/database.service";
import { puppiesRouter } from "./src/routes/puppies.routes";
import dotenv from "dotenv";


dotenv.config();

const port = 8000;

connectToDatabase()
    .then(() => {
        app.use("/puppies", puppiesRouter);

        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });

// app.listen(port, (): void => {
//   console.log(`Example app listening on port ${port}`);
// });
