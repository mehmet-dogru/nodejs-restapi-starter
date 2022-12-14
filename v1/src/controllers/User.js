const httpStatus = require("http-status");
const { passwordToHash, generateAccessToken } = require("../scripts/utils/helper");
const UserService = require("../services/UserService");
const eventEmitter = require("../scripts/events/eventEmitter");
const path = require("path");

class User {}

module.exports = new User();
