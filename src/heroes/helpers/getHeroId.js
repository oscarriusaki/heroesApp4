import { heroes } from "../data/Heroes"

export const getHeroId = (id='') =>{
    
    return heroes.find(hero => hero.id === id) 
}
