export default class LeftPanelController {
    constructor() {
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
    }

    openLeftPanel() {
        console.log('HAHAHA');
        $('#left-sidebar')
            .sidebar('setting', 'dimPage', false)
            .sidebar('setting', 'closable', false)
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');
    }
}
