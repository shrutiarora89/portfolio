(function(module) {
  var repos = {};

  repos.all = [];

// Making an ajax call to Fetch the repos
  repos.requestRepos = function(callback) {

    $.ajax({
      url: 'https://api.github.com/user/repos',
      type: 'GET',
      headers: {
        'Authorization': 'token ' + githubToken
      },
      success: function (data, message , xhr) {
        repos.all = data;
      }
    })
    .done(callback);

  };

  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;


})(window);
