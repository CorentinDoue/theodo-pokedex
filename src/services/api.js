
export async function fetchPokemonFromAPI(id) {
    try {
        const response = await fetch(
            process.env.REACT_APP_POKE_API_URL + id
        );
        return await response.json();
    } catch (error) {
        throw error;
    }
}
