import React from "react";


export function getFirstAbility(pokemon) {
    if (!pokemon || !pokemon.abilities || !pokemon.abilities.length) {
        return null;
    }

    return pokemon.abilities[0].ability.name;
}

export function getAbilities(pokemon) {
    if (!pokemon || !pokemon.abilities || !pokemon.abilities.length) {
        return null;
    }

    return pokemon.abilities.map(ability => ability.ability.name);
}


export function getMoves(pokemon) {
    if (!pokemon || !pokemon.moves || !pokemon.moves.length) {
        return null;
    }

    return pokemon.moves.map(move => move.move.name);
}


export function getTypes(pokemon) {
    if (!pokemon || !pokemon.types || !pokemon.types.length) {
        return null;
    }

    return pokemon.types.map(type => type.type.name);
}

export function convertPoundsToKilograms(pounds) {
    return Math.round(0.453592 * pounds * 100) / 100;
}
