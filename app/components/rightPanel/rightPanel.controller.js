export default class RightPanelController {
    constructor(animals) {
        this.name = 'rightPanel';
        this.ownAnimals = animals;
        this.animals = [{
            "id": 0,
            "name": "cat",
            "img": "//placekitten.com/100/80",
            "description": "This is a cat",
            "cost": 500,
            "productivity": 10,
        }, {
            "id": 1,
            "name": "dog",
            "img": "//placekitten.com/100/80",
            "description": "This is a dogg",
            "cost": 500,
            "productivity": 10,
        }]
    }

    checkInfo(animalId) {
        alert('animalId: '+ animalId +'!');
    }

    buyAnimal(animal) {
        this.ownAnimals.push({name:animal.name, id: animal.id, img: animal.img});
        console.log(this.ownAnimals);
    }

    toggleRightPanel() {
        $('#rightPanel')
            .sidebar('setting', 'dimPage', false)
            .sidebar('setting', 'closable', false)
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle')
    }

    closePanel() {
        $('#rightPanel').sidebar('hide')
    }

}
