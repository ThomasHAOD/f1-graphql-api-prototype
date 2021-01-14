module.exports = (array) => {
  return array.map((item) => {
    return {
      ...item._doc,
      _id: item._id.toString(),
    };
  });
};
