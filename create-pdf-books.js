const logger = require('log-util');
const dir = require('node-dir');
const mdPDF = require('markdown-pdf');

const excludedDirs = ['node_modules', '_books', '.git'];
const fileExtensionRegEx = /.md$/;

/**
 * Read all files in the main directory matching the fileExtension and excluding some directories.
 * in the last callback; Array of file paths can be used.
 */
dir.readFiles(__dirname, {
        match: fileExtensionRegEx,
        excludeDir: excludedDirs,
    }, (err, content, next) => {
        if (err) throw err;
        next();
    },
    (err, files) => {
        if (err) throw err;
        // read all files
        logger.info(`finished reading files in directory ${__dirname}: `, files);

        // convert files to PDF and save in the directory name!
        const dirName = __dirname.split('/');
        convertFilesToPDF(files, `./_books/${dirName[dirName.length-1]}.pdf`)
    }
);


const convertFilesToPDF = (files, outputPath) => {
    // Convert all files to single PDF
    mdPDF().concat.from(files).to(outputPath, function () {
        logger.info('Created Book in: ', outputPath);
    });
};
