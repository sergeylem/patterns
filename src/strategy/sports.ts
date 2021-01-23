import { FavoriteWorkout } from './contracts'

export class Running implements FavoriteWorkout {
  public begin(): void {
    console.log('Go running on the park.')
  }
}

export class Soccer implements FavoriteWorkout {
  public begin(): void {
    console.log('Play soccer with friends.')
  }
}

export class Gym implements FavoriteWorkout {
  public begin(): void {
    console.log('Go to the gym.')
  }
}

//Now with strategy it's easy to add New activity
export class Volleyball implements FavoriteWorkout {
  public begin(): void {
    console.log('Play volleyball with his friends')
  }
}