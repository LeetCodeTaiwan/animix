export default class LeftPanelController {
    constructor(animals, $http) {
        this.zooItems = [{
            "id": 0,
            "code": "cat",
            "name": "lulala",
            "nickname": "lulala",
            "img": "https://placekitten.com/g/200/100",
            "description": "",
            "level": 3,
            "attr": { "thunder": 0, "fire": 0, "ice": 0, "soul": 2, "mix": 0 },
            "favor": 70,
            "productivity": 20,
        }, {
            "id": 1,
            "code": "Hyena",
            "name": "慣老闆",
            "nickname": "慣老闆",
            "img": "https://placekitten.com/g/200/100",
            "description": "",
            "level": 5,
            "attr": { "thunder": 3, "fire": 1, "ice": 1, "soul": 0, "mix": 0 },
            "favor": 30,
            "productivity": 150,
        }]
        this.ownAnimals = animals;
        this.currentAnimal = {};
        this.fetch = $http;
    }

    closePanel() {
        $('#leftPanel').sidebar('hide')
    }

    openUpgradeModal(animal) {
      this.currentAnimal = animal;
      $('#upgradeModal')
          .modal('show');
        var req = {
            method: 'POST',
            url: '//hackntu-nodered.mybluemix.net/start-talking/',
            headers: {
                "Access-Control-Allow-Origin" : "*",
                "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            data: { "type": animal.code }
        };
        //
        // this.fetch(req).then(function(response){
        //     alert(response);
        //
        // }, function(){
        //     alert('error');
        // });
      // fetch({
      //         method: 'POST',
      //         url: 'http://hackntu-nodered.mybluemix.net/start-talking'
      //     }).then(function successCallback(response) {
      //         // this callback will be called asynchronously
      //         // when the response is available
      //         console.log(response);
      //     }, function errorCallback(response) {
      //         // called asynchronously if an error occurs
      //         // or server returns response with an error status.
      //         alert('http get errorCallback');
      //     });
      }
}
