class HomeCtrl {

    constructor($rootScope, $scope, $stateParams, communication, $uibModal, dataFactory) {
        'ngInject';
        this.communication = communication;
        this.$uibModal = $uibModal;
        this.dataFactory = dataFactory;
    }

    $onInit() {
      this.communication.registerCallbackFunc(["elementMoved", "listDeleted"], this.refreshModuleBlock());
    }

    refreshModuleBlock(){
      let self = this;
      return(eventName, value)=>{
        if(eventName == "elementMoved"){}
      }
    }

    showDialogue(){
      let _objToFeed = this.dataFactory.dataFeed();
      this.$uibModal.open({
                animation: true,
                component: 'modalComponent',
                size: 'medium',
                //backdrop: 'static',
                resolve: {
                    modalData: function () {
                        return _objToFeed;
                    }
                }
            });
    }
}


let homeObj = {
    bindings: {},
    templateUrl: './scripts/home/home.html',
    controller: HomeCtrl,
    controllerAs: 'home'
}

export default homeObj;
