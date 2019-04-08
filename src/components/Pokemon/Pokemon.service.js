import React from "react";

export function getFirstAbility(pokemon) {
    if (pokemon && pokemon.abilities && pokemon.abilities[0]) {
        return pokemon.abilities[0].ability.name;
    } else {
        return null;
    }
}

export function getAbilities(pokemon) {
    if (pokemon && pokemon.abilities && pokemon.abilities[0]) {
        return <div><ul>{pokemon.abilities.map((ability, index) => <li key={index}>{ability.ability.name}</li>)}</ul></div>;
    } else {
        return null;
    }
}

export function getMoves(pokemon) {
    if (pokemon && pokemon.moves && pokemon.moves[0]) {
        return <div><ul>{pokemon.moves.map((move, index) => <li key={index}>{move.move.name}</li>)}</ul></div>;
    } else {
        return null;
    }
}

export function getTypes(pokemon) {
    if (pokemon && pokemon.types && pokemon.types[0]) {
        return <div><ul>{pokemon.types.map((type, index) => <li key={index}>{type.type.name}</li>)}</ul></div>;
    } else {
        return null;
    }
}

export function convertPoundsToKilograms(pounds) {
    return Math.round(0.453592 * pounds * 100) / 100;
}
