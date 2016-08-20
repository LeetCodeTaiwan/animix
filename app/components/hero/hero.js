import heroComponent from './hero.component';

export default app => {
    app.directive('hero', heroComponent);

    if (ENVIRONMENT === 'test') {
        require('./hero.test.js');
    }

    $('.ui.sidebar').sidebar('toggle');
}
