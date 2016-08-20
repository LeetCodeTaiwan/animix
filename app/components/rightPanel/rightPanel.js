import rightPanelComponent from './rightPanel.component';

export default app => {
  app.directive('rightPanel', rightPanelComponent);

  if (ENVIRONMENT === 'test') {
    require('./rightPanel.test.js');
  }
}
