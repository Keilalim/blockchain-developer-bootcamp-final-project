App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
       $.getJSON('../jobs.json', function(data) {
      var jobsRow = $('#jobsRow');
      var jobTemplate = $('#jobTemplate');

      for (i = 0; i < data.length; i ++) {
        jobTemplate.find('.panel-title').text(data[i].name);
        jobTemplate.find('img').attr('src', data[i].picture);
        jobTemplate.find('.job-category').text(data[i].childrens);
        jobTemplate.find('.job-credits').text(data[i].age);
        jobTemplate.find('.job-location').text(data[i].location);
        jobTemplate.find('.btn-choose').attr('data-id', data[i].id);

        jobsRow.append(jobTemplate.html());
      }
    });

    return await App.initWeb3();
  },
  initWeb3: async function() {
    /*
     * Replace me...
     */

    return App.initContract();
  },

  initContract: function() {
    /*
     * Replace me...
     */

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-chooset', App.handleChoose);
  },

  markChoosed: function() {
    /*
     * Replace me...
     */
  },

  handleChoose: function(event) {
    event.preventDefault();

    var jobId = parseInt($(event.target).data('id'));

    /*
     * Replace me...
     */
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
