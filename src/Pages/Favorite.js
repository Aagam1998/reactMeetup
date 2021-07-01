import React , {useContext} from 'react'
import FavoritesContext from '../Store/favorites-context'
import { MeetUpList } from '../Components/Layout/Meetups/MeetUpList';

export default function Favorite() {

    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if(favoritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet,Start adding some?</p>
    }else{
        content = <MeetUpList meetups={favoritesCtx.favorites}/>
    }

    return (
        <section>
            <h1>
                My Favorites
            </h1>
            {content}
        </section>
    )
}

