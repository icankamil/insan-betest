const Joi = require("joi");

const UserValidation = Joi.object({
  Id: Joi.string().required(),
  userName: Joi.string().required(),
  accountNumber: Joi.string().required(),
  emailAddress: Joi.string().required(),
  identityNumber: Joi.string().required(),
});

const UserUpdateValidation = Joi.object({
  Id: Joi.string(),
  userName: Joi.string(),
  accountNumber: Joi.string(),
  emailAddress: Joi.string(),
  identityNumber: Joi.string(),
});

const IdValidation = Joi.object({
  accountNumber: Joi.string().required(),
  identityNumber: Joi.string().required(),
});
const AccountNumber = Joi.object({
  accountNumber: Joi.string().required(),
});
const IdentityNumber = Joi.object({
  identityNumber: Joi.string().required(),
});

module.exports = {
  UserValidation,
  IdValidation,
  AccountNumber,
  IdentityNumber,
  UserUpdateValidation,
};
