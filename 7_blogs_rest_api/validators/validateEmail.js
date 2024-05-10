const validateEmail = (email) => {
  const result = email.match(
    /^[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/
  );

  return result;
};

module.exports = validateEmail;
