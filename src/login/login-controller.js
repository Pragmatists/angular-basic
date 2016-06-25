angular
    .module('app')
    .controller('loginCtrl', loginCtrl);

function loginCtrl(localStorageService, user, $state) {
   var vm = this;

    vm.login = login;

    function login(){
        user.login().then(function(res){
            if(vm.name === res.data.login && vm.password === res.data.password){
                localStorageService.set('login', true);
                $state.go('shop');
            }
        });
    }
}