import { heroes } from '../data/Heroes';

export const getHeroPublisher = (publisher) => {
    const validPublisher = ['DC Comics', 'Marvel Comics']
    if(!validPublisher.includes(publisher)){
        throw new Error(`${publisher} is not a vaid publisher`)
    }

    return heroes.filter(heroes => heroes.publisher === publisher)
}
