import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/db";

const JWT_SECRET = process.env.JWT_SECRET as string;


//Sign Up 

export const register = async (req: Request, res:Response) =>{
    try {
    const { fullName, email, password } = req.body;

    // check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await prisma.user.create({
      data: { fullName, email, password: hashedPassword }
    });

    // generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d"
    });

    res.status(201).json({ token, user: { id: user.id, fullName: user.fullName, email: user.email } });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
}


//Login

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    // generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d"
    });

    res.status(200).json({ token, user: { id: user.id, fullName: user.fullName, email: user.email } });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};