module.exports = {
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: './test',
      outputName: './report/report.html',
    }],
  ],
};
