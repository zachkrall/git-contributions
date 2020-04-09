const fetch = require('node-fetch')
const process_body = require('./src/process_body')

async function gitContributions ({ github, gitlab } = {}) {

  let gitlab_data, github_data

  let status = {github: '', gitlab: ''}

  if(gitlab){
    gitlab_data = await fetch('https://gitlab.com/users/'+gitlab+'/calendar.json', { method: 'GET' })
                        .then(res => {
                          status.gitlab = res.status
                          return res.json()
                        })
                        .then(json => {
                          let max = 0
                          let min = 999
                          let list = []
                          for( var key in json){
                            let date = key
                            let count = json[key]

                            if(count > max){
                              max = count
                            }
                            if(count < min){
                              min = count
                            }
                            list.push({ date, count })
                          }
                          return {
                            min_value: min,
                            max_value: max,
                            entries: list
                          }
                        })
  }

  if(github){
    github_data = await fetch('https://github.com/'+github, { method: 'GET' })
                       .then(res => {
                         status.github = res.status
                         return res.text()
                       })
                       .then(body => {
                         return process_body(body)
                       })
  }

  return {
    status,
    github: github_data,
    gitlab: gitlab_data
  }
}

module.exports = gitContributions
