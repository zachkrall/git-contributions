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

### response object

```
{
  status: { github: 200, gitlab: 200 },
  github: {
    max_value: 28,
    min_value: 1,
    entries: [{ date: '2020-01-01', count: 6 }, { date: '2020-01-02', count: 2 }]
  },
  gitlab: {
    min_value: 1,
    max_value: 20,
    entries: [{ date: '2020-01-01', count: 4 }]
  }
}
```
