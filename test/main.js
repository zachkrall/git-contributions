const gitContributions = require('../lib/main.js');

// console.log(gitContributions());

(async () => {

  let json = await gitContributions({
              gitlab: 'zachkrall',
              github: 'zachkrall'
            })
            .then(data => {
              return data
            })

  console.log(json)

})();
