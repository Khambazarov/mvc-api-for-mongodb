import express from "express";
import { simpleUsersRouter } from "./routes/simpleUsersRouter.js";
import { nestedUsersRouter } from "./routes/nestedUsersRouter.js";

const app = express();
const port = 3033;

app.use(express.json());
app.use("/simpleUsers", simpleUsersRouter);
app.use("/nestedUsers", nestedUsersRouter);

app.listen(port, () => {
  console.log(`API is now listening on port http://localhost:${port}`);
});
