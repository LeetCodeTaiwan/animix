import template from './leftPanel.html';
import controller from './leftPanel.controller';

let leftPanelComponent = function () {
  return {
    restrict: 'E',
    scope: {},
    template,
    controller,
    controllerAs: 'leftPanelCtrl',
    bindToController: true
  };
};

export default leftPanelComponent;
