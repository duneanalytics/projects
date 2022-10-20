// Contraints for properties in the md-files
// Used with validate.js: https://validatejs.org/#validators

require('./addCustomValidators');

module.exports = {
  name: {
    presence: true,
    type: "string",
  },
  logo: {
    type: "string",
  },
  color: {
    type: "string",
  },
  tags: {
    type: "array",
  },
  schemas: {
    type: "array",
  },
  dashboards: {
    type: "array",
  },
  queries: {
    type: "array",
  },
  links: {
    type: "array",
  },
  embeds: {
    type: "array",
    eachSatisfies: {
      name: {
        type: "string",
        presence: true,
      },
      link: {
        validEmbedLink: true,
        presence: true,
      },
    },
  },
  related: {
    type: "array",
  },
};
