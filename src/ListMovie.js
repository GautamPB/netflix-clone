import React from 'react'
import './ListMovie.css'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import TickIcon from '@material-ui/icons/CheckCircle';
import { useStateValue } from './StateProvider'

function ListMovie({ id, image, duration, genre, year, age }) {

    const [{ watchlist }, dispatch] = useStateValue()

    const removeFromList = () => {
        //removes movie from watchlist
        dispatch({
            type: 'REMOVE_FROM_LIST',
            id: id
        })
    }

    return (
        <div className='listMovie'>
            <div className='listMovie__image'>
                <img src={image} />
            </div>

            <div className='listMovie__content'>
                <div className='listMovie__details'>
                    <h3>{genre}</h3>
                    <h3>{duration}</h3>
                    <h3>{age}</h3>
                    <h3>{year}</h3>
                </div>

                <div className='listMovie__options'>
                    <button className='movie__options__button'><PlayIcon className='listMovie__button' /></button>
                    <button onClick={removeFromList} className='movie__options__button'><TickIcon className='listMovie__button' /></button>
                    <button className='movie__options__button'><ThumbUpIcon className='listMovie__button' /></button>
                    <button className='movie__options__button'><ThumbDownIcon className='listMovie__button' /></button>
                </div>
            </div>
        </div>
    )
}

export default ListMovie
