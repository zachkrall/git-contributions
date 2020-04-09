const gitContributions = require('../main.js');

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
