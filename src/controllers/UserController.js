import User from "../schemas/User";
import { hash } from "bcrypt";

class UserController {
  async create(request, response) {
    const { name, email, username, password, phone } = request.body;

    // const passwordCrypt = await hash(password, 10);

    const user = await User.create({
      name,
      email,
      username,
      password: password,
      phone,
    });

    return response.json(user);
  }

  async index(request, response) {
    const users = await User.find();
    return response.json(users);
  }
}

export default new UserController();
