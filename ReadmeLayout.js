function GenerateMD(data) {
  return `
# ${data.title}

${data.description}

## Install
${data.installations}
  
  `
}

module.exports = GenerateMD;