// Add custom validators
const validate = require('validate.js/validate');

// Used to validate each item in array
validate.validators.eachSatisfies = (array, itemConstraints) => {
  if (!array) {
    return null;
  }
  if (!Array.isArray(array)) {
    // Don't return error here. Use `type: "array"` to validate that it's an array.
    return null;
  }

  const errors = array
    .map((item) => validate(item, itemConstraints))
    .filter(Boolean)

  return errors.length === 0 ? null : { errors: errors }
}

// Used to validate embed link urls
validate.validators.validEmbedLink = (link) => {
  if (!link) {
    return "can't be blank";
  }
  const match = link.match(
    link.includes("/embeds/")
      ? new RegExp("/embeds/(\\d+)/(\\d+)/([^/?#]+)")
      : new RegExp("/query/(\\d+)/visualization/(\\d+)\\?api_key=([^&#]+)")
  );

  if (match?.length !== 4) {
    return `has invalid url: ${link} – Must match either`
      + ` /embeds/{query_id}/{viz_id}/{api_key} or`
      + ` /query/{query_id}/visualization/{viz_id}?api_key={api_key}`
  }

  return null;
}
