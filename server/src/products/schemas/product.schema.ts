import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: String,
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
