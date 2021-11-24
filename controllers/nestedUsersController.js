import NestedUsersModel from "../models/nestedUsersModel.js";

export const createNestedUser = async (nestedUserObj, callback) => {
  await NestedUsersModel.create(nestedUserObj, (err, docs) => {
    if (err) {
      callback(err);
    } else {
      callback(docs);
    }
  });
};

export const readAllNestedUsers = async () => {
  return await NestedUsersModel.find({}).sort({ _id: -1 });
};

export const readAllNestedUsersEmails = async () => {
  return await NestedUsersModel.find({}, { email: 1 });
};

export const readAccountHistoryOfNestedUser = async (id) => {
  return await NestedUsersModel.findById(id, {
    accountHistory: 1,
  });
};

export const updateNestedUser = async (id, updateFields) => {
  return await NestedUsersModel.findByIdAndUpdate(id, updateFields, {
    new: true,
  });
};

export const deleteNestedUser = async (id) => {
  return await NestedUsersModel.findByIdAndRemove(id);
};
