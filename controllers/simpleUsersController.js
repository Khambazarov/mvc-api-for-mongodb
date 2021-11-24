import SimpleUsersModel from "../models/simpleUsersModel.js";


export const createSimpleUser = async (simpleUserObj) => {
  return await SimpleUsersModel.create(simpleUserObj);
};

export const readAllSimpleUsers = async () => {
  return await SimpleUsersModel.find({});
};

export const updateSimpleUser = async (id, updateFields) => {
  return await SimpleUsersModel.findByIdAndUpdate(id, updateFields, {
    new: true,
  });
};

export const deleteSimpleUser = async (id) => {
  return await SimpleUsersModel.findByIdAndRemove(id);
};
