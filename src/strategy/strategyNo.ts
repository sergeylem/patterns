enum FavoriteWorkout {
  Running, Soccer, Gym
}

class Person {
  public name: string;
  public favoriteWorkout: FavoriteWorkout;

  constructor(name: string, favoriteWorkout: FavoriteWorkout) {
    this.name = name;
    this.favoriteWorkout = favoriteWorkout;
  }

  workout(): void {
    console.log(`${ this.name } decided to:`);
    if(this.favoriteWorkout == FavoriteWorkout.Running) {
      console.log('Go running on the park.')
    } else if (this.favoriteWorkout == FavoriteWorkout.Soccer) {
      console.log('Play soccer with friends.')
    } else if (this.favoriteWorkout  == FavoriteWorkout.Gym) {
      console.log('Go to the gym.')
    }
  }

}

// Execute
const Josh = new Person('Josh', FavoriteWorkout.Soccer)
Josh.workout() // Josh decided to: Play soccer with friends.