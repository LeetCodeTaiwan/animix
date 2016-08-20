import template from './rightPanel.html';
import controller from './rightPanel.controller';

let rightPanelComponent = function () {
  return {
    restrict: 'EA',
    scope: {},
    template,
    controller,
    controllerAs: 'rightPanelCtrl',
    bindToController: true
  };
};

export default rightPanelComponent;
