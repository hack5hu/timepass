const { hash, genSalt, compare, hashSync } = require("bcryptjs");

const BHashing = async (pass) => {
  const salt = await genSalt(10);
  return hash(pass, salt);
};
const Comparing = async (pass, hash) => {
  return compare(pass, hash);
};

module.exports = {
  BHashing,
  Comparing,
};
