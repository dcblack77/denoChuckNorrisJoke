class DenoApp {
    
    constructor() {
        this.getChuckRandomJoke();
    }


    async getChuckRandomJoke() {
        const joke = await fetch("https://api.chucknorris.io/jokes/random");
        console.log(joke.status);
        console.log(await joke.json());
    }

    randomNumber(caracters: number) {
        const numberArr = [];
        for (let index = 0; index < caracters; index++) {
            numberArr.push(Math.random());
        }
        return numberArr;
    }
}

new DenoApp();