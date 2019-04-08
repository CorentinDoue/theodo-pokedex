export function getFirstAbility(pokemon) {
    if (pokemon && pokemon.abilities && pokemon.abilities[0]) {
        return pokemon.abilities[0].ability.name;
    } else {
        return null;
    }
}

export function convertPoundsToKilograms(pounds) {
    return Math.round(0.453592 * pounds * 100) / 100;
}
