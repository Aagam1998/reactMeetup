import {createContext , useState} from 'react';

const FavoritesContext = createContext({
    favorites : [],
    totalFavorites : 0 ,
    addFavorite : (favoriteMeetup) => {},
    removeFavorite : (meetupid) => {},
    itemIsFavorite : (meetupid) => {},
});

export function FavoritesContextProvider (props) {

    const [userFavorites, setUserFavorites] = useState([])

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }
    function removeFavoriteHandler(meetupid) {
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupid);
        });
    }
    function itemIsFavoriteHandler(meetupid) {
        return userFavorites.some(meetup => meetup.id === meetupid);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites : userFavorites.length,
        addFavorite : addFavoriteHandler,
        removeFavorite : removeFavoriteHandler,
        itemIsFavorite : itemIsFavoriteHandler,
    };

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;