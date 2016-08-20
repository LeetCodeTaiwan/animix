export default class HomeController {
    constructor (diamond, $interval) {
        this.name = 'home';
        this.diamond = diamond
        $interval(() => {
          this.diamond.count = this.diamond.count + this.diamond.rate / 20
        }, 50)
    }

    getThunder ({ originalEvent:{ clientX, clientY } }) {
      this.diamond.count += 1

      $('.thunder-wrap').css('left', clientX)
      $('.thunder-wrap').css('top', clientY - 90)
      $('.thunder').css('animation', 'thunder 0.5s linear')
      setTimeout(() => $('.thunder').css('animation', 'initial'), 500)
    }

}
