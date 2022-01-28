const fs = require("fs")

const BASE_DIR = `${__dirname}/../pages`

const projectDirectories = fs.readdirSync(BASE_DIR)

// Iterate through the project dirs
projectDirectories.forEach((projDir) => {
  let fileType = ""
  const imageFileBase = `${BASE_DIR}/${projDir}/${projDir}`
  // Check that we have an image and what file type it is
  if (fs.existsSync(`${imageFileBase}.png`)) {
    fileType = 'png'
  } else if (fs.existsSync(`${imageFileBase}.svg`)) {
    fileType = 'svg'
  } else {
    throw new Error(`${BASE_DIR}/${projDir} must include a svg or png logo`)
  }

  const imageFile = `${imageFileBase}.${fileType}`

  const stats = fs.statSync(imageFile)
  // In order to download images greater than 1Mb you need to use the github data api.
  // Since these are just logos we should keep the build process simple and restrict the image
  // sizes to less than 1 MB
  if (stats.size > 1048576) {
    throw new Error(`Image (${imageFile}) must be less than 1Mb. Instead it is ${stats.size} Bytes`)
  }
})