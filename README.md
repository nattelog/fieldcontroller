# formcontroller
A tool for handling website forms with Angular and Bootstrap.

### Example
```html
  <form name="myForm" ng-controller="formController">
    <div class="row">
      
    </div>
  </form>
  
  <script type="javascript">
    function controller("formController", function($scope){
      $scope.formController = new FormController("myForm");
    });
  </script>
```
