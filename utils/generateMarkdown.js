// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  const badges = {
    'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU GPLv3': '[![License: GNU GPLv3](https://img.shields.io/badge/License-GNU%20GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  };

  return badges[license] || '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GNU GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
  };

  return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `## License
  
  This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
${data.description || 'Add a project description here.'}

## Author
${data.author || 'Anonymous'}

## User Story
${data.userStory || 'User Story'}

## Acceptance Criteria
${data.acceptanceCriteria || 'Acceptance Criteria'}

## Deployed Links
${data.deployedLinks || 'Deployed Links'}

${renderLicenseSection(data.license)}`;

}

module.exports = generateMarkdown;
