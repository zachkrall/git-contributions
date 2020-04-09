const fetch = require('node-fetch')
const processBody = require('./src/processBody')
const formatJSON = require('./src/formatJSON');

// GLOBALS
const method = { method: 'GET' }

// HELPER FUNCTIONS
const sendText = res => res.text()
const sendJSON = res => res.json()

// MAIN FUNCTION
async function gitContributions ({ github, gitlab } = {}) {

  // FORMAT URL
  let gh_url = `https://github.com/${github}`
  let gl_url = `https://gitlab.com/users/${gitlab}/calendar.json`

  // STATUS OBJECT
  let data = {}

  if(gitlab){
    data['gitlab'] = await fetch(
      gl_url, method
    )
    .then(sendJSON)
    .then(formatJSON)
  }

  if(github){
    data['github']= await fetch(
      gh_url, method
    )
    .then(sendText)
    .then(processBody)
  }

  return { data }
}

module.exports = gitContributions
