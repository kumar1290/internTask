const peopleTable = require("../models/people");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const signup = async (req, res) => {
   console.log("req :", req.body)
   const { name, email, password } =
      req.body;
   try {
      const userExist = await User.findOne({ email });
      if (userExist) {
         return res.status(200).json({
            errors: [{ msg: "Email already exists" }],
         });
      }
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      try {
         const user = await peopleTable.create({
            name,
            email,
            password: hash,
         });
         const token = createToken(user);
         return res
            .status(200)
            .cookie("token", token, {
               expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
               httpOnly: true,
            })
            .json({ success: true, user, token });
      } catch (error) {
         console.log(error);
         return res.status(500).json({ error });
      }
      // return res.status(200).json({ success: true });
   } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: error });
   }
}

const login = (req, res) => {
   res.status(200).json({ message: "hellologin" })
}

const getUser = (req, res) => {
   res.status(200).json({ message: "hellogetuser" })
}

const obj = { login, signup, getUser };

module.exports = obj;