import { myDataSource } from "../config/database";
import User from "../entity/userModel";

const userRepository = myDataSource.getRepository(User);

export default userRepository;
