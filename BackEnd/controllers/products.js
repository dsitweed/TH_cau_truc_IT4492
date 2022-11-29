// eslint-disable-next-line no-unused-vars
import express from "express";
import { NOT_FOUND } from "../constants/error.js";
import { ProductModel } from "../models/Product.js";

const model = ProductModel;

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const index = async (req, res) => {
  let { skip, limit, ...filter } = req.query;

  skip = skip ? Number(skip) : 0;
  limit = limit ? Number(limit) : 10;

  if (filter.name) {
    filter.name = { $regex: filter.name, $options: "i" };
  }

  try {
    let items = await model
      .find(filter)
      .skip(skip)
      .limit(limit)
      .populate("categories");

    return res.json({
      statusCode: 200,
      data: items,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      statusCode: 500,
      error,
      message: error.message,
    });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const getById = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await model.findById(id);
    if (!item)
      return res.json({
        error: NOT_FOUND,
        statusCode: 404,
      });
    return res.json({
      statusCode: 200,
      data: item,
    });
  } catch (error) {
    return res.json({
      error,
      statusCode: 500,
    });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const create = async (req, res) => {
  const data = req.body;
  try {
    let item = await model.create(data);
    item.save();
    return res.json({
      statusCode: 200,
      data: item,
    });
  } catch (error) {
    return res.json({
      error,
      statusCode: 500,
    });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    let item = await model.findByIdAndUpdate(id, data, { new: true });
    if (!item) {
      return res.json({
        statusCode: 404,
        error: NOT_FOUND,
      });
    }
    return res.json({
      statusCode: 200,
      data: item,
    });
  } catch (error) {
    return res.json({
      error,
      statusCode: 500,
    });
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @returns
 */
const deleteById = async (req, res) => {
  const id = req.params.id;
  try {
    let item = await model.findByIdAndDelete(id);
    if (!item) {
      return res.json({
        statusCode: 404,
        error: NOT_FOUND,
      });
    }
    return res.json({
      statusCode: 200,
      data: item,
    });
  } catch (error) {
    return res.json({
      error,
      statusCode: 500,
    });
  }
};

export default { index, getById, create, update, deleteById };
