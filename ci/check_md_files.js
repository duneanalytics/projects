const fs = require("fs")
const matter = require("gray-matter")
const validate = require("validate.js")

const BASE_DIR = `${__dirname}/../pages`

const projectDirectories = fs.readdirSync(BASE_DIR)

var constraints = {
  "name": {
    presence: true,
    type: "string"
  },
  "logo": {
    type: "string"
  },
  "color": {
    type: "string"
  },
  "tags": {
    type: "array"
  },
  "schemas": {
    type: "array"
  },
  "dashboards": {
    type: "array"
  },
  "queries": {
    type: "array"
  },
  "links": {
    type: "array"
  },
  "embeds": {
    type: "array"
  },
  "related": {
    type: "array"
  },
};

// Iterate through the project dirs
projectDirectories.forEach((projDir) => {
  const mdFile = `${BASE_DIR}/${projDir}/${projDir}.md`
  const matterContent = fs.readFileSync(mdFile)
  // try and load the content into gray-matter
  const { data, content } = matter(matterContent);
  // validate the type
  const res = validate(data, constraints);
  if (res) {
    throw new Error(`Failed to validate ${mdFile}: ${JSON.stringify(res)}`)
  }

})