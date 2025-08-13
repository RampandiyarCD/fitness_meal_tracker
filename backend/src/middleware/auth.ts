import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ message: "Unauthorized" });

  const token = header.split(" ")[1];
  console.log(token);
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    (req as any).currentUser = decoded;
    console.log(decoded);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
