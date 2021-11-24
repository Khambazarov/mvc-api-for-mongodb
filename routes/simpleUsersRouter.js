import express from "express";
import mongoose from "mongoose";
import * as SimpleUsersController from "../controllers/simpleUsersController.js";

const simpleUsersRouter = express.Router();
mongoose.connect("mongodb://localhost:27017/test");

// simple users: CREATE
simpleUsersRouter.post("/create", async (req, res) => {
  const simpleUserObj = req.body;
  const result = await SimpleUsersController.createSimpleUser(simpleUserObj);
  res.json({
    result,
  });
});

// simple users: READ
simpleUsersRouter.get("/", async (_req, res) => {
  res.json({
    simpleUsers: await SimpleUsersController.readAllSimpleUsers(),
  });
});

// simple users: UPDATE
simpleUsersRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;
  const result = await SimpleUsersController.updateSimpleUser(id, updateFields);
  res.json({
    result,
  });
});

// simple users: DELETE
simpleUsersRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  const result = await SimpleUsersController.deleteSimpleUser(id);
  res.json({
    result,
  });
});

export { simpleUsersRouter };
