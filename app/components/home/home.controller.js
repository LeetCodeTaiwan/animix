export default class HomeController {
    constructor (diamond, $interval) {
        this.name = 'home';
        this.diamondCount = diamond.count
        this.diamondRate = diamond.rate
        $interval(() => {
          this.diamondCount = this.diamondCount + this.diamondRate / 20
        }, 50)
    }

    getThunder ({ originalEvent:{ clientX, clientY } }) {
      this.diamondCount += 1

      $('.thunder-wrap').css('left', clientX)
      $('.thunder-wrap').css('top', clientY - 90)
      $('.thunder').css('animation', 'thunder 0.5s linear')
      setTimeout(() => $('.thunder').css('animation', 'initial'), 500)
    }

}
