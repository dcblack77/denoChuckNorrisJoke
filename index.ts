(new class DenoApp {

    constructor() {
        this.getChuckRandomJoke();
    }


    async getChuckRandomJoke() {
        const joke=await fetch("https://api.chucknorris.io/jokes/random");
        console.log(joke.status);
        console.log(await joke.json());
    }
}());
