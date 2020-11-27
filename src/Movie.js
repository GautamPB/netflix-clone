import React from 'react'
import './Movie.css'
import PlayIcon from '@material-ui/icons/PlayCircleFilled'
import PlusIcon from '@material-ui/icons/Add'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown'

function Movie(props) {
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
                    <PlayIcon className='movieOptions__play' />
                    <PlusIcon className='movieOptions__add' />
                    <ThumbUpIcon className='movieOptions__like' />
                    <ThumbDownIcon className='movieOptions__dislike' />
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
