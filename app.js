weather = null
weatherBoostType = []

function wBoost(weather) {
    if (weather == "sunny") {
        return weatherBoostType = ["grass", "fire", "ground"]
    }
    else if (weather == "rainy") {
        return weatherBoostType = ["water", "electric", "bug"]
    }
    else if (weather == "partly_cloudy") {
        return weatherBoostType = ["ground", "normal"]
    }
    else if (weather == "cloudy") {
        return weatherBoostType = ["Fairy", "Fighting", "Poison"]
    }
     else if (weather == "windy") {
        return weatherBoostType = ["flying", "dragon", "psychic"]
    }
    else if (weather == "snow") {
        return weatherBoostType = ["ice", "steel"]
    }
    else if (weather == "fog") {
        return weatherBoostType = ["dark", "ghost"]
    }
}

wBoost("sunny")

class Pokemon {
    constructor(name, attack, attack_type, attack_dmg, hp) {
        this.name = name;
        this.attack = attack;
        this.attack_type = attack_type;
        this.attack_dmg = attack_dmg;
        this.hp = hp;
    }

    // With every weather change request from the API invoke the isBoosted() method.
    isBoosted() {
        if (weatherBoostType.includes(this.attack_type)) {
            this.attack_dmg += 20
        }
        else {
            this.attack_dmg += 0
        }
    }

let venusaur = new Pokemon("venusaur", "frenzy plant", 'grass', 100)
venusaur.isBoosted()
