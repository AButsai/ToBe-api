const fs = require('fs/promises');
const { v4 } = require('uuid');
const bucket = require('../db/firebase/firebase');

const uploadFirebase = async file => {
  const options = {
    gzip: true,
    metadata: {
      metadata: {
        firebaseStorageDownloadTokens: v4(),
      },
      contentType: file.mimetype,
      cacheControl: 'public, max-age=31536000',
      predefinedAcl: 'publicRead',
    },
  };

  const response = await bucket.upload(file, options);

  await fs.unlink(file);

  return response[0].getSignedUrl({
    action: 'read',
    expires: '01-01-2030',
  });
};

const deleteFileFromFirebase = async fileName => {
  await bucket.file(fileName).delete();
};

module.exports = { uploadFirebase, deleteFileFromFirebase };
