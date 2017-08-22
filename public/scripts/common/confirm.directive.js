class confirmDirective {
    constructor($q) {
        this.restrict = 'AE';
        this.$q = $q;
    }

    link(scope, element, attr) {
      var msg = attr.confirmDirective || "Are you sure?";
      var clickAction = attr.confirmedClick;
      element.bind('click',function (event) {
          if ( window.confirm(msg) ) {
              scope.$eval(clickAction)
          }
      });
    }

    static directiveFactory($q){
        confirmDirective.instance = new confirmDirective($q);
        return confirmDirective.instance;
    }
}

confirmDirective.directiveFactory.$inject = ['$q'];

export default confirmDirective;
