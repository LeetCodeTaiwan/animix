export default class LeftPanelController {
    constructor(animals, diamond, $http) {
        this.diamond = diamond
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

    openUpgradeModal(animal) {
        this.currentAnimal = animal;
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
    renameAnimal(event) {
        if (event.keyCode === 13) {
            this.isEditMode = false;
        }
    }

    upgradeAnimal(attrIdx) {
        if (this.currentAnimal.levels[attrIdx] < 3 && (this.currentAnimal.levels[0] + this.currentAnimal.levels[1] + this.currentAnimal.levels[2] < 3)) {
            this.currentAnimal.levels[attrIdx] += 1;
            this.diamond.total_productivity += this.currentAnimal.productivity;
            this.diamond.rate = this.diamond.total_productivity * this.diamond.diversity_ratio;
            // TODO: check cost
        }
    }

    getMixImageUrl(animal) {
        if (!animal) {
            return ''; }
        let url = 'images/mix/' + animal.code + '_' + this.levelsToImageCode(animal.levels) + '.jpg'
        console.log(animal.levels);
        console.log(url);
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
