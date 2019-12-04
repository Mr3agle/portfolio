const multer = require('multer')
const path = require('path')

module.exports.storage = {
   storage: new multer.diskStorage({
      destination: (req, file, callback) => {
         callback(null, '/images/projects');
      },
      //path.resolve(__dirname, ".", "uploads"),
      filename: (req, file, callback) => {
         callback(null, file.originalname)
      }
   })
}