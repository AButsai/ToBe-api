const handleSchemaValidationError = require('./handleSchemaValidationError');
const RequestError = require('./RequestError');
const createToken = require('./createToken');
const userRole = require('./userRole');
const getOrCreateAdmin = require('./getOrCreateAdmin');
const modelMethodPassword = require('./modelMethodPassword');
const utils = require('./utils');

const { uploadFirebase, deleteFileFromFirebase } = require('./firabase');

module.exports = {
  handleSchemaValidationError,
  RequestError,
  createToken,
  userRole,
  getOrCreateAdmin,
  modelMethodPassword,
  utils,
  uploadFirebase,
  deleteFileFromFirebase,
};
