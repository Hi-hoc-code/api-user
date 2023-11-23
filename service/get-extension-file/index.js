const getExtensionFile = (filename) => {
    const arrString = filename.split("."); //lay duoi file (vv...exe, png,...)
    return arrString[arrString.length - 1];
};
module.exports = {
    getExtensionFile,
};