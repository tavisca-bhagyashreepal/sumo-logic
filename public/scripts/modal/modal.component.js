class ModalCtrl {

    constructor($rootScope, $scope, $stateParams, communication, $uibModal) {
        'ngInject';
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.$stateParams = $stateParams;
        this.$uibModal = $uibModal;
    }

    $onInit() {
      let self = this;
      this.team = "";
      this.employee ="";
      this.dropdownTeam = false;
      this.dropdownEmployee = false;
      this.ok = false;
      this.modalData = this.resolve.modalData;
      this.createData();
      this.$rootScope.$on('$stateChangeStart', () => {
        self.close({});
      });
    }

    createData(){
      this.teams= [];
      this.teamsToShow=[];
      this.employees= [];
      this.employeesToShow=[];
      this.dropdownTeam =false;
      this.dropdownEmployee = false;
      this.modalData.forEach((el)=>{
        this.teams.push(el.team);
        this.teamsToShow.push(el.team);
        //this.employees.push(el.employees);
        //this.employeesToShow.push(el.employees);
      })
    }

    reset(){
      this.dropdownTeam =false;
      this.dropdownEmployee = false;
      this.ok = false;
    }

    search(filter){
      let newValue = [];
      let self = this;
      this.ok = false;
      this[filter+'s'].forEach((el)=>{
        if(el.indexOf(self[filter])==0){
          newValue.push(el);
        }
      })
      this[filter+'sToShow'] = newValue;
    }

    onSelect($event,value,term){
      this.ok = false;
      this[value] = term;
      this.reset();
      this.setEmployee();
    }

    setEmployee(){
      let self = this;
      this.ok = false;
      this.modalData.forEach((el)=>{
        if(el.team ==self.team){
          this.employees = el.employees;
          this.employeesToShow =el.employees;
        }
      })
    }

    closeModal(btn) {
     this.ok= btn ?true: false;
     if(this.ok){
       if(this.teams.indexOf(this.team)>-1 ||!this.team)
        this.close();
     } else this.close();
    }
}


let modalComponent = {
    bindings: {
      close:'&',
      resolve: '<'
    },
    templateUrl: './scripts/modal/modal.html',
    controller: ModalCtrl,
    controllerAs: 'modal'
}

export default modalComponent;
