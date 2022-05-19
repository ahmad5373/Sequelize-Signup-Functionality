const user = require("../model/user");
//For Password Hashing 
const bcrypt = require("bcrypt");

// To create a New User
exports.createUser = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone, password } = req.body;
    await user
      .findOne({ where: { email: email, deletedAt: null } })
      .then(async function (userData) {
        if (userData) {
          return res.status(401).json({
            message: "This Email is Already Exist.",
          });
        } else {
          const roleId = "1";
          const userName = first_name + " " + last_name;
          const encryptpassword = await bcrypt.hash(password, 10); //encrypt password using bcrypt technique
          const data = {
            userName: userName,
            roleId: roleId,
            password: encryptpassword,
            email: email,
            phone: phone,
          };
          const userData = await user.create(data);
          return res.status(200).json({
            message: "User created successfully.",
            Data: userData,
          });
        }
      });
  } catch (err) {
    console.log("error creating user", err);
    res.status(401).json({
      message: "error creating user",
      err,
    });
  }
};

//For Login Request
exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  user
    .findOne({ where: { email: email, deletedAt: null } })
    .then(async function (userData) {
      if (!userData) {
        return res.status(401).json({
          message: "Incorrect Email",
        });
      } else {
        response_compare = await bcrypt.compare(password, userData.password);
        if (response_compare) {
          return res.status(200).json({
            message: "Login Successfully.",
            data: userData,
          });
        } else {
          return res.status(401).json({
            message: "Incorrect Password",
          });
        }
      }
    });
};
