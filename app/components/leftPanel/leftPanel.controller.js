export default class LeftPanelController {
    constructor(animals, diamond, $http) {
        this.diamond = diamond
        this.messages = []
        this.messgeToBeSend = ''
        this.zooItems = [{
            "id": 0,
            "code": "cat",
            "name": "lulala",
            "nickname": "lulala",
            "img": "https://placekitten.com/g/200/100",
            "description": "",
            "level": 3,
            "attr": {
                "thunder": 0,
                "fire": 0,
                "ice": 0,
                "soul": 2,
                "mix": 0
            },
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
            "attr": {
                "thunder": 3,
                "fire": 1,
                "ice": 1,
                "soul": 0,
                "mix": 0
            },
            "favor": 30,
            "productivity": 150,
        }]
        this.ownAnimals = animals;
        this.currentAnimal = {
            "id": 1,
            "code": "Butterfly-LBSM",
            "name": "琉球青斑蝶",
            "img": "Butterfly-LBSM-O.jpg",
            "cost": 500,
            "productivity": 10,
            levels: [0, 0, 0]
        }
        this.fetch = $http;
    }

    closePanel() {
        $('#leftPanel').sidebar('hide')
    }

    sendMessage (event, currentAnimal) {
      if (event.keyCode === 13 && this.messgeToBeSend !== '') {
        var req = {
            method: 'POST',
            url: '//hackntu-nodered.mybluemix.net/continue-talking/',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            data: {
                "userInput": this.messgeToBeSend
            }
        };
        const messages = this.messages
        const messgeToBeSend = this.messgeToBeSend
        const threadId = currentAnimal.uuid
        this.messages.push({
          threadId,
          from: 'user',
          text: messgeToBeSend
        })
        this.fetch(req).then((response) => {
            try {
              messages.push({
                threadId,
                from: 'animal',
                text: response.data[0]
              })
            }
            catch (e) { console.log(e) }
        })
        this.messgeToBeSend = ''
      }
    }

    openUpgradeModal(animal) {
        this.currentAnimal = animal;
        this.currentAnimal.sumlevels = this.currentAnimal.levels[0] + this.currentAnimal.levels[1] + this.currentAnimal.levels[2];
        $('#upgradeModal')
            .modal('show');
        var req = {
            method: 'POST',
            url: '//hackntu-nodered.mybluemix.net/start-talking/',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            data: {
                "type": animal.code
            }
        };


        const messages = this.messages
        this.fetch(req).then(function(response){
          try {
            messages.push({
              threadId: animal.uuid,
              from: 'animal',
              text: response.data[0]
            })
          } catch (e) { console.log(e) }
        }, function(err){
            console.log(err);
        });
    }

    continueDialog(userInput){
        var req = {
            method: 'POST',
            url: '//hackntu-nodered.mybluemix.net/continue-talking/',
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
            },
            data: {
                "userInput": userInput
            }
        };
        this.fetch(req).then(function(response){
            console.log(response);
        }, function(err){
            console.log(err);
        });
    }

    renameAnimal(event) {
        if (event.keyCode === 13) {
            this.isEditMode = false;
        }
    }

    upgradeAnimal(attrIdx) {
        if (this.currentAnimal.sumlevels < 3) {
            this.currentAnimal.levels[attrIdx] += 1;
            this.diamond.total_productivity += this.currentAnimal.productivity;
            this.diamond.rate = this.diamond.total_productivity * this.diamond.diversity_ratio;
            // TODO: check cost
        }
        this.currentAnimal.sumlevels = this.currentAnimal.levels[0] + this.currentAnimal.levels[1] + this.currentAnimal.levels[2];
    }

    getMixImageUrl(animal) {
        if (!animal) {
            return ''; }
        let url = 'images/mix/' + animal.code + '_' + this.levelsToImageCode(animal.levels) + '.jpg'
        // console.log(animal.levels);
        // console.log(url);
        return url;
    }

    levelsToImageCode(levels) {
        let code = ''
        let currSum = 0;

        // levels[0]
        if (levels[0] < 0) {
            code += '0';
        } else if (levels[0] <= 3) {
            code += levels[0].toString();
            currSum += levels[0]
        } else {
            code += '3';
            currSum += 3
        }

        // levels[1]
        if (levels[1] < 0) {
            code += '0';
        } else {
            if (currSum + levels[1] <= 3) {
                code += levels[1].toString();
                currSum += levels[1]
            } else {
                code += (3 - currSum).toString();
                currSum += (3 - currSum)
            }
        }


        // levels[2]
        if (levels[2] < 0) {
            code += '0';
        } else {
            if (currSum + levels[2] <= 3) {
                code += levels[2].toString();
                currSum += levels[2]
            } else {
                code += (3 - currSum).toString();
                currSum += (3 - currSum)
            }
        }

        return code
    }

    test() {
        console.log("test");
        return '';
    }
}
