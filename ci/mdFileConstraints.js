// Contraints for properties in the md-files
// Used with validate.js: https://validatejs.org/#validators

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
  },
  related: {
    type: "array",
  },
};
