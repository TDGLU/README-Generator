function GenerateMD(data) {
  return `
# ${data.title}

${data.description}

## Table Of Contents
- [Usage](#usage)
- [Install](#install)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)

## Install
${data.installations}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Tests
${data.test}

## Questions
Contact me at:
- ${data.username} 
- ${data.email}
  
  `
}

module.exports = GenerateMD;