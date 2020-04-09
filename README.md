### git-contributions

tool for getting contribution data from GitHub and GitLab

### example
install module
```
npm install zachkrall/git-contributions
```
use in js file
```
const gitContributions = require('git-contributions')

const config = {
  gitlab: 'username',
  github: 'username'
}

gitContributions(config)
.then(data => {
  console.log(data)
})
```
