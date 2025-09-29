import { heroes, Owner, type Heroe } from "../data/heroes.data"

const getHeroById = (id: number): Heroe | undefined => {

    const hero = heroes.find(hero => {
        return hero.id === id;
    })

    /*if(!hero){
        throw new Error('No existe un heroe con ese ${id}')
    }*/

    return hero
}

console.log(getHeroById(6))

export const getHeroesByOwner = (owner: Owner) => {
    const heroesByOwner = heroes.filter(heroe => heroe.owner === owner)

    return heroesByOwner


}