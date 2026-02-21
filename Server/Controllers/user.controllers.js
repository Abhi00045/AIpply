import User from '../Model/user.model.js'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const saltRounds = 10;

/* ================= SIGNUP ================= */

export const userPost = async (req, res) => {
  try {
    const { fullname, email, password, role } = req.body

    const existingUser = await User.findByEmail(email)

    if (existingUser) {
      return res.status(409).json({ message: "Email already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds)

    const newUser = await User.create({
      full_name: fullname,
      email,
      password: hashedPassword,
      role
    })

    const token = jwt.sign(
      {
        userId: newUser.id,
        userEmail: newUser.email
      },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    )

    res.status(201).json({
      message: "Signup successful",
      user: {
        id: newUser.id,
        fullName: newUser.full_name,
        email: newUser.email,
        role: newUser.role
      },
      token
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
}

/* ================= LOGIN ================= */

export const getUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findByEmail(email)

    if (!user) {
      return res.status(409).json("email not found")
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return res.status(401).json("invalid password")
    }

    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    )

    res.status(200).json({
      message: "login successful",
      user: {
        id: user.id,
        fullName: user.full_name,
        email: user.email,
        role: user.role
      },
      token
    })

  } catch (err) {
    console.error(err)
    res.status(500).json({ message: "Server error" })
  }
}