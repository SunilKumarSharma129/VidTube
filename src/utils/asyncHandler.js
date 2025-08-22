// import mongoose from "mongoose";
// const { Promise } = require("mongoose");
// const { Promise } = mongoose;

const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };
