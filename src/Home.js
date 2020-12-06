import React from 'react'
import PlayIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import './Home.css'
import Movie from './Movie'

function Home() {
    return (
        <div className='homePage'>
            <div class='homePage__banner'>
                <img
                    className='homePage__banner__image'
                    src='https://vistapointe.net/images/breaking-bad-wallpaper-20.jpg'
                    alt=""
                />

                <div className='banner__info'>
                    <p>Diagonsed with terminal lung cancer,</p>
                    <p>a high school chemistry teacher resorts</p>
                    <p>to cooking and selling methamphetamine</p>
                    <p>in order to secure his family's future.</p>
                </div>

                <div className='homePage__banner__buttons'>
                    <button className='banner__playButton'>
                        <PlayIcon className='banner__playIcon' />
                        <h3>Play</h3>
                    </button>

                    <button className='banner__infoButton'>
                        <InfoIcon className='banner__infoIcon' />
                        <h3>More Info</h3>
                    </button>
                </div>
            </div>

            <div className='homePage__row__header'>
                <p>Recommended for You</p>
            </div>
            <div className='homePage__row'>
                <Movie id='1'
                    image='https://i0.wp.com/www.ageratingjuju.com/wp-content/uploads/2018/10/Peaky-Blinders-Age-Rating-2018-TV-Show-Netflix-Poster-Images-and-Wallpapers.jpg?fit=1493%2C902&ssl=1'
                    duration='50 mins'
                    age='18+'
                    year='2013'
                    genre='Crime . Drama'
                />

                <Movie id='2'
                    image='https://wallpaperaccess.com/full/2703652.png'
                    duration='50 mins'
                    age='15+'
                    year='2017'
                    genre='Action . Crime . Mystery . Thriller'
                />

                <Movie id='3'
                    image='https://cdn.images.express.co.uk/img/dynamic/36/590x/Mission-Impossible-6-streaming-full-movie-how-to-watch-online-legal-1006441.jpg?r=1545316280583'
                    duration='2h 26mins'
                    age='13+'
                    year='2018'
                    genre='Action . Adventure . Thriller'
                />

                <Movie id='4'
                    image='https://i.pinimg.com/originals/ff/f1/9b/fff19bb417ee53bf91a3b364220a2610.jpg'
                    duration='1h 54mins'
                    age='13+'
                    year='2014'
                    genre='Biography . Drama . Thriller . War'
                />

                <Movie id='5'
                    image='https://cdn.flickeringmyth.com/wp-content/uploads/2019/11/Shutter-Island-600x338.jpg'
                    duration='2h 18mins'
                    age='15+'
                    year='2010'
                    genre='Mystery . Thriller'
                />
            </div>

            <div className='homePage__row__header'>
                <p>Popular on Netflix</p>
            </div>
            <div className='homePage__row'>
                <Movie id='6'
                    image='https://s.hdnux.com/photos/60/47/65/12746080/3/1200x0.jpg'
                    duration='2h 22mins'
                    age='12+'
                    year='1994'
                    genre='Drama . Romance'
                />

                <Movie id='7'
                    image='https://www.binged.com/wp-content/uploads/2020/06/Dark-Web-Series-Season-3-Netflix-1.jpg'
                    duration='1h'
                    age='15+'
                    year='2017'
                    genre='Crime . Drama . Mystery'
                />

                <Movie id='8'
                    image='https://cdn.blocktoro.com/wp-content/uploads/2019/11/Black-Mirror-Season-6-Details.png'
                    duration='1h'
                    age='15+'
                    year='2011'
                    genre='Drama . Sci-Fi . Thriller'
                />

                <Movie id='9'
                    image='https://writtenbehindtheveil.files.wordpress.com/2020/06/green-mile-2.jpg'
                    duration='3h 9mins'
                    age='18+'
                    year='1999'
                    genre='Crime . Drama . Fantasy'
                />

                <Movie id='10'
                    image='https://images-na.ssl-images-amazon.com/images/S/pv-target-images/0049d03d032e7d072386e9ac1fc07de1e58b0f8d8166ef89bc364d148f7f7f19._RI_V_TTW_.jpg'
                    duration='1h 37mins'
                    age='15+'
                    year='2014'
                    genre='Action . Drama . Sci-Fi'
                />
            </div>

            <div className='homePage__row__header'>
                <p>Comedy</p>
            </div>
            <div className='homePage__row'>
                <Movie id='11'
                    image='https://i.ytimg.com/vi/mBD1qa41-WY/maxresdefault.jpg'
                    duration='20 mins'
                    age='12+'
                    year='2013'
                    genre='Crime . Comedy'
                />

                <Movie id='12'
                    image='https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6e3c2864-0e48-4737-b0db-2c7e4e53227b_912x516.jpeg'
                    duration='22 mins'
                    age='15+'
                    year='1994'
                    genre='Comedy . Romance'
                />

                <Movie id='13'
                    image='https://www.techquila.co.in/wp-content/uploads/2020/05/AAAABdk4R5BtL8FdG-24J-_IMX5ZeXWPFmvuMdOxU1TOEmzlZXfKHOKGB7cnipZK4bJ-O5PdFY407Cbyq-DBFtEFlNGYBzqh7vbD3uhE0O4Vrj_mBmQPDh8UbPSfpJWd3A.jpg'
                    duration='1h 7mins'
                    age='12+'
                    year='2018'
                    genre='Comedy'
                />

                <Movie id='14'
                    image='https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZWYdPCy9W13RkKxy4S0b0H_t2l1dzQmmT7O_qLLf_FuDQkYBOLLOarHcnYBEHv3Kqm1uyx08_gHsXX8yQVwGnx3I2Ha.jpg?r=aa3'
                    duration='1h 30mins'
                    age='PG'
                    year='2011'
                    genre='Comedy . Animation . Action'
                />

                <Movie id='15'
                    image='https://i1.wp.com/www.jakes-take.com/wp-content/uploads/2013/08/were_the_millers_movie-1920x1080.jpg?ssl=1'
                    duration='1h 50mins'
                    age='15+'
                    year='2013'
                    genre='Comedy . Crime'
                />
            </div>
        </div>
    )
}

export default Home
