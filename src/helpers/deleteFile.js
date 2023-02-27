const fs = require('fs/promises');

const deleteFile = async path => {
  try {
    // await fs.stat(path);
    await fs.unlink(path);
    return true;
  } catch (error) {
    console.log(error.message);
    return true;
  }
};

module.exports = deleteFile;
