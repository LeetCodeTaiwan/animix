import leftPanelComponent from './leftPanel.component';

export default app => {
  app.directive('leftPanel', leftPanelComponent);

  if (ENVIRONMENT === 'test') {
    require('./leftPanel.test.js');
  }
}
