// https://github.com/amel-true/lessons/tree/master/di

import {Dog} from './dog';
import {CliOutput} from './cli-output';
import {ContainerBuilder} from 'node-dependency-injection'

class DogService {
	createDog() {
		const output = new CliOutput();
		const dog = new Dog(output);
		dog.bark('bow-wow');
	}
}

let container = new ContainerBuilder()
container.register('dog', DogService)
let dogService = container.get('dog')

//const dogService = new DogService();
dogService.createDog();
