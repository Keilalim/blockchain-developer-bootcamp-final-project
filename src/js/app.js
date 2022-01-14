App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
       $.getJSON('../doobem.json', function(data) {
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
    if (window.ethereum) {
      App.web3Provider = window.ethereum;
      try {
        // Request account access
        await window.ethereum.request({ method: "eth_requestAccounts" });;
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(App.web3Provider);

    return App.initContract();
  },

  initContract: function() {
    $.getJSON('Doobem.json', function(data) {
      // Get the necessary contract artifact file and instantiate it with @truffle/contract
      var DoobemArtifact = data;
      App.contracts.Doobem = TruffleContract(AdoptionArtifact);
    
      // Set the provider for our contract
      App.contracts.Doobem.setProvider(App.web3Provider);
    
      // Use our contract to retrieve and mark the Job ID
      return App.markAdopted();
    });

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

var jobInstance;

App.contracts.Doobem.deployed().then(function(instance) {
  jobIdInstance = instance;

  return jobIdInstance.getJobId.call();
}).then(function(jobId) {
  for (i = 0; i < volunteers.length; i++) {
    if (jobId[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});