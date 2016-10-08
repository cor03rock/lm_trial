(function() {
  'use strict';

  angular
    .module('app.contacts')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'contacts',
        config: {
          url: '/',
          templateUrl: 'app/contacts/contacts.html',
          controller: 'ContactsController',
          controllerAs: 'vm',
          title: 'Contacts',
          settings: {
            nav: 1,
            content: '<i class="fa fa-contacts"></i> Contacts'
          }
        }
      }
    ];
  }
})();
