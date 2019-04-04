import {convertPoundsToKilograms, getFirstAbility} from './Pokemon.service';
import React from 'react';

const emptyPokemon = {
    abilities: []
};
const pokemon = {
    abilities: [
        {
            ability:{
                name: "chlorophyll"
            }
        }
    ]
};


describe('Tests for getFirstAbility', () => {
    it('Should return null if there is no abilities', () => {
        expect(getFirstAbility(emptyPokemon)).toEqual(null);
    })
    it('Should return the first ability', () => {
        expect(getFirstAbility(pokemon)).toEqual("chlorophyll");
    })
});

describe('Tests for convertPoundsToKilograms', () => {
    it('Should return 0 for 0 pound', () => {
        expect(convertPoundsToKilograms(0)).toEqual(0);
    })
    it('Should return 0.453592 for 1 pound', () => {
        expect(convertPoundsToKilograms(1)).toEqual(0.453592);
    })
    it('Should return 23*0.453592 for 23 pound', () => {
        expect(convertPoundsToKilograms(23)).toEqual(23*0.453592);
    })
});
