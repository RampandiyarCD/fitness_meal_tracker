import User from "../entity/userModel";
import userRepository from "../repository/userRepository";
import bcrypt from "bcrypt";

export const createUserService = async (userData: User) => {
  if (!userData) {
    return { error: "No data passed" };
  }

  const existingUser = await userRepository.findOne({
    where: { email: userData.email },
  });
  if (existingUser) {
    return { error: "Email already exists" };
  }

  const saltRounds = 10;
  if (userData.password) {
    userData.password = await bcrypt.hash(userData.password, saltRounds);
  }

  const newUser = userRepository.create(userData);
  const savedUser = await userRepository.save(newUser);

  return {
    message: "User created successfully",
  };
};

export const loginUserService = async (email: string, password: string) => {
  const loginData = await userRepository.findOne({
    where: { email },
  });

  if (!loginData) {
    return { error: "User does not exist" };
  }

  if (!email) {
    return { error: "Provide email" };
  }

  const isPasswordValid = await bcrypt.compare(password, loginData.password);
  if (!isPasswordValid) {
    return { error: "Email or password is wrong" };
  }

  return { message: "Login successful", id: loginData.id };
};

export const updateUserService = async (userData: User, id: string) => {
  if (!id) {
    return { error: "User ID is required" };
  }

  const existingUser = await userRepository.findOne({ where: { id } });
  if (!existingUser) {
    return { error: "User not found" };
  }

  const updatedUser = userRepository.merge(existingUser, userData);

  await userRepository.save(updatedUser);

  return { message: "User updated successfully" };
};

export const getUserByIdService = async (id: string) => {
  if (!id) {
    return { error: "No user ID provided" };
  }

  const user = await userRepository.findOne({ where: { id } });
  if (!user) {
    return { error: "User not found" };
  }

  return { user: user };
};
