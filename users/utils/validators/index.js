const validateRequest = (data, dataValidation) => {
  const { error } = dataValidation.validate(data);
  if (error) throw new Error(error.details[0].message);
};

module.exports = { validateRequest };
