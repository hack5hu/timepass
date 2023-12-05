const FileModel = require("../model/file");
const { users } = require("../model/user");
const { BHashing } = require("../services/bcrypt");

const CreateUser = async (body) => {
  const hash = await BHashing(body.password);
  let file
 FileModel.create(fileDetails, (err, file) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }

    file=file
  });
  const data = {
    ...body,
    password: hash,
    image: file,
  };
  return users.create(data);
};
const GetUsers = () => users.find({ uid: "bq8vXj8Uo" });
module.exports = { CreateUser, GetUsers };
