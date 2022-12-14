const BaseService = require("./BaseService");
const BaseModel = require("../models/Users");

class UserService extends BaseService {
  constructor() {
    super(BaseModel);
  }

  list(page, limit, where) {
    const allUsers = BaseModel.find(where || {})
      .limit(limit * 1)
      .skip((page - 1) * limit);
    return allUsers;
  }
}

module.exports = new UserService();
