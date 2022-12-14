const Joi = require("joi");

const createValidation = Joi.object({
  name: Joi.string().required().min(1).messages({
    "string.base": `Ad alanı String bir değer olmalıdır!`,
    "string.empty": `Ad alanı boş bırakılamaz!`,
    "string.min": `Ad en az {#limit} karakter olmalı!`,
    "any.required": `Ad alanı boş bırakılamaz!`,
  }),
  surname: Joi.string().required().min(1).messages({
    "string.base": `Soyad alanı String bir değer olmalıdır!`,
    "string.empty": `Soyad alanı boş bırakılamaz!`,
    "string.min": `Soyad en az {#limit} karakter olmalı!`,
    "any.required": `Soyad alanı boş bırakılamaz!`,
  }),
  password: Joi.string().required().min(6).messages({
    "string.base": `Şifre alanı String bir değer olmalıdır!`,
    "string.empty": `Şifre alanı boş bırakılamaz!`,
    "string.min": `Şifreniz en az {#limit} karakter olmalı!`,
    "any.required": `Şifre alanı boş bırakılamaz!`,
  }),
  phone: Joi.string().required().min(11).max(11).messages({
    "string.base": `Telefon alanı String bir değer olmalıdır!`,
    "string.empty": `Telefon alanı boş bırakılamaz!`,
    "string.min": `Telefon {#limit} karakter olmalı!`,
    "string.max": `Telefon {#limit} karakter olmalı!`,
    "any.required": `Telefon alanı boş bırakılamaz!`,
  }),
  email: Joi.string().email().required().messages({
    "string.base": `Email alanı String bir değer olmalıdır!`,
    "string.empty": `Email alanı boş bırakılamaz!`,
    "any.required": `Email alanı boş bırakılamaz!`,
    "string.email": `Lütfen geçerli bir email giriniz!`,
  }),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": `Email alanı String bir değer olmalıdır!`,
    "string.empty": `Email alanı boş bırakılamaz!`,
    "any.required": `Email alanı zorunludur!`,
    "string.email": `Lütfen geçerli bir email giriniz!`,
  }),
  password: Joi.string().required().messages({
    "string.empty": `Şifre alanı boş bırakılamaz!`,
    "any.required": `Şifre alanı zorunludur!`,
  }),
});

const resetPasswordValidation = Joi.object({
  email: Joi.string().email().required().min(8).messages({
    "string.base": `Email alanı String bir değer olmalıdır!`,
    "string.empty": `Email alanı boş bırakılamaz!`,
    "string.min": `Email en az {#limit} karakter olmalı!`,
    "any.required": `Email alanı boş bırakılamaz!`,
    "string.email": `Lütfen geçerli bir email giriniz!`,
  }),
});

module.exports = {
  createValidation,
  loginValidation,
  resetPasswordValidation,
};

// messages: {
//   'string.alphanum': '{{#label}} must only contain alpha-numeric characters',
//   'string.base': '{{#label}} must be a string',
//   'string.base64': '{{#label}} must be a valid base64 string',
//   'string.creditCard': '{{#label}} must be a credit card',
//   'string.dataUri': '{{#label}} must be a valid dataUri string',
//   'string.domain': '{{#label}} must contain a valid domain name',
//   'string.email': '{{#label}} must be a valid email',
//   'string.empty': '{{#label}} is not allowed to be empty',
//   'string.guid': '{{#label}} must be a valid GUID',
//   'string.hex': '{{#label}} must only contain hexadecimal characters',
//   'string.hexAlign': '{{#label}} hex decoded representation must be byte aligned',
//   'string.hostname': '{{#label}} must be a valid hostname',
//   'string.ip': '{{#label}} must be a valid ip address with a {{#cidr}} CIDR',
//   'string.ipVersion': '{{#label}} must be a valid ip address of one of the following versions {{#version}} with a {{#cidr}} CIDR',
//   'string.isoDate': '{{#label}} must be in iso format',
//   'string.isoDuration': '{{#label}} must be a valid ISO 8601 duration',
//   'string.length': '{{#label}} length must be {{#limit}} characters long',
//   'string.lowercase': '{{#label}} must only contain lowercase characters',
//   'string.max': '{{#label}} length must be less than or equal to {{#limit}} characters long',
//   'string.min': '{{#label}} length must be at least {{#limit}} characters long',
//   'string.normalize': '{{#label}} must be unicode normalized in the {{#form}} form',
//   'string.token': '{{#label}} must only contain alpha-numeric and underscore characters',
//   'string.pattern.base': '{{#label}} with value {:[.]} fails to match the required pattern: {{#regex}}',
//   'string.pattern.name': '{{#label}} with value {:[.]} fails to match the {{#name}} pattern',
//   'string.pattern.invert.base': '{{#label}} with value {:[.]} matches the inverted pattern: {{#regex}}',
//   'string.pattern.invert.name': '{{#label}} with value {:[.]} matches the inverted {{#name}} pattern',
//   'string.trim': '{{#label}} must not have leading or trailing whitespace',
//   'string.uri': '{{#label}} must be a valid uri',
//   'string.uriCustomScheme': '{{#label}} must be a valid uri with a scheme matching the {{#scheme}} pattern',
//   'string.uriRelativeOnly': '{{#label}} must be a valid relative uri',
//   'string.uppercase': '{{#label}} must only contain uppercase characters'
// }
