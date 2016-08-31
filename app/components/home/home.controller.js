export default class HomeController {
    constructor(diamond, $interval, currentPlanets, $timeout) {
        this.name = 'home';
        this.diamond = diamond
        this.currentPlanets = currentPlanets
        this.timeout = $timeout
        $interval(() => {
            this.diamond.count = this.diamond.count + this.diamond.rate / 20
        }, 50)
        this.firstClick = true
    }

    getThunder({ originalEvent: { clientX, clientY } }) {
        this.diamond.count += this.diamond.rate

        $('.thunder-score').css('display', 'block')
        $('.thunder-wrap').css('left', clientX)
        $('.thunder-wrap').css('top', clientY - 90)
        $('.thunder').css('animation', 'thunder 0.5s linear')
        setTimeout(() => $('.thunder').css('animation', 'initial'), 500)
        setTimeout(() => $('.thunder-score').css('display', 'none'), 500)

        if (this.firstClick) {
          this.timeout(()=>document.getElementById('startup').click())
          this.firstClick = false
        }
    }

    giveMeDiamond() {
        this.diamond.count += 100000000
    }
}
