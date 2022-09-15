import { connectToDatabase } from "./services/database.service"
import { app } from './app';
import { usersRouter } from "./routes/user.routes";

connectToDatabase()
    .then(() => {
        app.use("/user", usersRouter);

        app.listen(3333, () => {
            console.log(`Server started at http://localhost:3333`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });