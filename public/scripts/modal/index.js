let modalModule = angular.module('app.modal', []);

// Controllers
import modalComponent from './modal.component';
modalModule.component('modalComponent',modalComponent);

export default modalModule;
