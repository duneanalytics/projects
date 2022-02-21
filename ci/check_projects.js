const fs = require("fs");
const matter = require("gray-matter");
const validate = require("validate.js");

const mdFileConstraints = require("./mdFileConstraints");

// Turns readable file path (appropriate for error messages)
// into full path that works with `fs` in GitHub actions
const fsPath = (str) => `${__dirname}/../${str}`;

const projectDirectories = fs.readdirSync(fsPath("pages"));

projectDirectories.forEach((projectName) => {
  const mdFileName = `pages/${projectName}/${projectName}.md`;
  const { data } = matter(fs.readFileSync(fsPath(mdFileName)));

  // Check properties in the md file
  const errors = validate(data, mdFileConstraints);
  if (errors) {
    throw new Error(
      `Invalid file "${mdFileName}": ` + JSON.stringify(errors, null, 2)
    );
  }

  if (data.logo) {
    // Check that logo exists
    const logoFileName = `pages/${projectName}/${data.logo}`;
    if (!fs.existsSync(fsPath(logoFileName))) {
      throw new Error(
        `Could not find logo "${logoFileName}" (specified in "${mdFileName}")`
      );
    }

    // Check logo file size:
    // In order to download images greater than 1Mb you need to use the github data api.
    // Since these are just logos we should keep the build process simple and restrict the image
    // sizes to less than 1 MiB
    const stats = fs.statSync(fsPath(logoFileName));
    if (stats.size > 1024 ** 2) {
      throw new Error(
        `Image (${p(logoFileName)}) must be less than 1 MiB. Instead it is ${
          stats.size
        } Bytes`
      );
    }
  }
});
