import express from "express";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  iss: {
    type: String,
    required: true,
  },
  azp: {
    type: String,
  },
  aud: {
    type: String,
  },
  sub: {
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  email_verified: {
    type: Boolean,
  },
  nbf: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
  },
  given_name: {
    type: String,
  },
  family_name: {
    type: String,
  },
  iat: {
    type: Number,
  },
  exp: {
    type: Number,
  },
  jti: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

export default User;