const peopleTable = require("../models/people");

const signup = async (req, res) => {
   console.log("req :", req.body)
   const { name, email, password } =
      req.body;
   try {
      const userExist = await peopleTable.findOne({ email });
      if (userExist) {
         return res.status(200).json({
            errors: [{ msg: "Email already exists" }],
         });
      }

      try {
         const user = await peopleTable.create({
            name,
            email,
            password
         });
         return res
            .status(200)
            .json( user );
      } catch (error) {
         console.log(error);
         return res.status(500).json({ error });
      }
   } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: error });
   }
}

const login = async (req, res) => {
   try {
      let user;
      const { email } = req.body;
      user = await peopleTable.findOne({ email });
      const { password } = req.body;
      if (user) {
         const isMatch = password==user.password;
         if (!isMatch) {
            return res.status(200).json({
               errors: [
                  {
                     msg: "Wrong username or password",
                  },
               ],
               email: email,
            });
         } else {
            res
               .status(200)
               .json(user );
         }
      } else {
         return res.status(200).json({
            errors: [
               {
                  msg: "Wrong username or password",
               },
            ],
            email: email,
         });
      }
   } catch (error) {
      res.status(500).json({ errors: error.message });
   }
}

const getUser = async (req, res) => {
   try {
      let user;
      const { id } = req.params;
      user = await peopleTable.findOne({ _id: id});
      if (user) {
         return res.status(200).json({_id : user._id , name: user.name, email: user.email});
      }
      else {
         return res.status(200).json({ message: "user not found " })
      }
   } catch (error) {
      res.status(500).json({ errors: error.message });
   }
}

const obj = { login, signup, getUser };

module.exports = obj;