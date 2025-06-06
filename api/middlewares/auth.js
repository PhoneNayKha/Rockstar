const express = require("express");
const jwt = require("jsonwebtoken");

function auth(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  if (jwt.verify(token, process.env.JWT_SECRET)) {
    req.userId = jwt.decode(token, process.env.JWT_SECRET).id;
    return next();
  }

  return res.status(401).json({ message: "Unauthorized" });
}

module.exports = { auth };
