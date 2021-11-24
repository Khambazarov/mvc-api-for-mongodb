import express from "express";
import mongoose from "mongoose";
import * as NestedUsersController from "../controllers/nestedUsersController.js";

const nestedUsersRouter = express.Router();
mongoose.connect("mongodb://localhost:27017/test");

// nested users: CREATE
nestedUsersRouter.post("/create", async (req, res) => {
  const nestedUserObj = req.body;
  await NestedUsersController.createNestedUser(nestedUserObj, (result) => {
    res.json({
      result,
    });
  });
});

// nested users: READ
nestedUsersRouter.get("/", async (_req, res) => {
  res.json({
    nestedUsers: await NestedUsersController.readAllNestedUsers(),
  });
});

// nested users: READ
nestedUsersRouter.get("/emails", async (_req, res) => {
  res.json({
    nestedUsers: await NestedUsersController.readAllNestedUsersEmails(),
  });
});

// nested users: READ
nestedUsersRouter.get("/accountHistory/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json({
    nestedUsers: await NestedUsersController.readAccountHistoryOfNestedUser(id),
  });
});

// nested users: UPDATE
nestedUsersRouter.patch("/update/:id", async (req, res) => {
  const id = req.params.id;
  const updateFields = req.body;
  const result = await NestedUsersController.updateNestedUser(id, updateFields);
  res.json({
    result,
  });
});

// nested users: DELETE
nestedUsersRouter.delete("/delete/:id/", async (req, res) => {
  const id = req.params.id;
  const result = await NestedUsersController.deleteNestedUser(id);
  res.json({
    result,
  });
});

export { nestedUsersRouter };
