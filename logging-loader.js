module.exports = function loggingLoader(contents) {
    console.log('Running loader for:', this.resourcePath);
    return contents;
};
