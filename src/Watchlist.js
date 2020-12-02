import React from 'react'
import './Watchlist.css'
import { useStateValue } from './StateProvider'
import ListMovie from './ListMovie'

function Watchlist() {

    const [{ watchlist }] = useStateValue();

    return (
        <div className='watchlist'>
            {watchlist?.length === 0 ? (
                <div className='watchlist__heading'>
                    <p>Your Watchlist is empty. Click on the add to watchlist button to add content here.</p>
                </div>
            ) : (
                    <div className='watchlist__heading'>
                        <p>My List</p>
                        {/* List out the products in ListMovie component */}
                        {watchlist.map(item => (
                            <ListMovie
                                id={item.id}
                                image={item.image}
                                duration={item.duration}
                                age={item.age}
                                year={item.year}
                                genre={item.genre}
                            />
                        ))}
                    </div>
                )}
        </div>
    )
}

export default Watchlist
