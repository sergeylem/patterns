import { Person } from './person'
import { Soccer } from './sports'
import { Volleyball } from './sports'

// Execute
let Josh = new Person('Josh', new Soccer())
Josh.workout() // Josh decided to: Play soccer with friends.

// Execute
Josh = new Person('Josh', new Volleyball())
Josh.workout() // Josh decided to: Play volleyball with friends.