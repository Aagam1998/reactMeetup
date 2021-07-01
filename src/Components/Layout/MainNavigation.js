import React , {useContext} from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'
import FavoritesContext from '../../Store/favorites-context'

export default function MainNavigation() {

    const favoritesCtx = useContext(FavoritesContext)

    return (
        
            <header className={classes.header}>
                <div  className={classes.logo} >
                    <h1>React MeetUps</h1>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All MeetUps</Link>
                        </li>
                        <li>
                            <Link to="/newmeetup">New MeetUps</Link>
                        </li>
                        <li>
                            <Link to="/favorites">
                                Favorite
                                <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
                                </Link>
                        </li>
                    </ul>
                </nav>
            </header>
      
    )
}
