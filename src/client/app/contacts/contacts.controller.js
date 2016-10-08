(function() {
  'use strict';

  angular
    .module('app.contacts')
    .controller('ContactsController', ContactsController);

  ContactsController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function ContactsController($q, dataservice, logger) {
    var vm = this;
    vm.news = {
      title: 'myCRM',
    };
    vm.messageCount = 0;
    vm.people = [];
    vm.title = 'Contacts';

    activate();

    function activate() {
      var promises = [getMessageCount(), getPeople()];
      return $q.all(promises).then(function() {
        logger.info('Activated Contacts View');
      });
    }

    function getMessageCount() {
      return dataservice.getMessageCount().then(function(data) {
        vm.messageCount = data;
        return vm.messageCount;
      });
    }

    function getPeople() {
      return dataservice.getPeople().then(function(data) {
        vm.people = data;
        return vm.people;
      });
    }
  }
})();
