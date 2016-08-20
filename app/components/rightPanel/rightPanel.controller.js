export default class RightPanelController {
  constructor () {
    this.name = 'rightPanel';
    this.animals = [
    	{
    		"id": 0,
    		"name": "cat",
    		"img": "//placekitten.com/50/50",
    		"description": "This is a cat",
    		"cost": 500,
    		"productivity": 10,
    	},
    	{
    		"id": 1,
    		"name": "dog",
    		"img": "//placekitten.com/50/50",
    		"description": "This is a dogg",
    		"cost": 500,
    		"productivity": 10,
    	}
    ]
  }

  buyAnimal (animalId) {
    console.log(animalId)
  }

  toggleRightPanel () {
    $('#rightPanel')
      .sidebar('setting', 'dimpage', false)
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('setting', 'closable', false)
      .sidebar('toggle')
  }

  closePanel () {
    $('#rightPanel').sidebar('hide')
  }

}
