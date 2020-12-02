import React from 'react'
import './Movie.css'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PlusIcon from '@material-ui/icons/Add'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'
import { useStateValue } from './StateProvider'

function Movie(props) {
    const [{ watchlist }, dispatch] = useStateValue(); //watchlist is destructured and dispatch is an action function

    const addToList = () => {
        //adding movies to watchlist using dispatch which is an action
        dispatch({
            type: 'ADD_TO_LIST',
            item: {
                id: props.id,
                image: props.image,
                duration: props.duration,
                age: props.age,
                year: props.year,
                genre: props.genre
            }

        })
    };
    return (
        <div className='movie'>
            <div className='box'>
                <img
                    className='movie__image'
                    src={props.image}
                    alt=""
                />
            </div>

            <div className='movie__content'>
                <div className='movie__options'>
                    <button className='movie__options__button'><PlayIcon className='movieOptions__play' /></button>
                    <button className='movie__options__button' onClick={addToList}><PlusIcon className='movieOptions__add' /></button>
                    <button className='movie__options__button'><ThumbUpIcon className='movieOptions__like' /></button>
                    <button className='movie__options__button'><ThumbDownIcon className='movieOptions__dislike' /></button>
                </div>

                <div className='movie__details'>
                    <h4>{props.duration}</h4>
                    <h4>{props.age}</h4>
                    <h4>{props.year}</h4>
                </div>

                <div class='movie__genre'>
                    <h3>{props.genre}</h3>
                </div>
            </div>
        </div>
    )
}

export default Movie
