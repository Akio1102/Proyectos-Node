const getUsers = (req, res) => {
  res.status(200).json({
    Message: "Hola get All",
  });
};

const getUserID = (req, res) => {
  res.status(200).json({
    Message: "Hola get ID",
  });
};

const postUser = (req, res) => {
  res.status(200).json({
    Message: "Hola post All",
  });
};

const putUser = (req, res) => {
  res.status(200).json({
    Message: "Hola put User",
  });
};

const patchUser = (req, res) => {
  res.status(200).json({
    Message: "Hola patch User",
  });
};

const deleteUser = (req, res) => {
  res.status(200).json({
    Message: "Hola delete User",
  });
};

module.exports = {
  getUsers,
  getUserID,
  postUser,
  putUser,
  patchUser,
  deleteUser,
};
