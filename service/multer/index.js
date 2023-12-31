const multer = require("multer");//doc file upload
const {getExtensionFile} = require("../get-extension-file")
const uploadImageSingle = () => {
    const storage = multer.diskStorage({

        filename: (req, file, cb) => {
            cb(null, Date.now() + "_" + file.originalname);
        },
    });
    const upload = multer({
        storage,
        fileFilter: (req, file, cb) => {
            const extensionImageList = ["png", "jpg", "jpeg", "gif", "webp"];
            const extensionFile = getExtensionFile(file.originalname);
            if (extensionImageList.includes(extensionFile)) {
                cb(null, true);
            } else {
                cb(new Error("Invalid extension"));
            }
        },
    });
    return upload;
};

module.exports = {
    uploadImageSingle
};
