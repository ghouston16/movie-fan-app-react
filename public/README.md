# Assignment - ReactJS app.

Name: Movies Fan App

## Overview.
In this extension of Movies Fan App this TMDB client application allows user to:
 + View Watchlist and Remove Movies
 + Discover TV Shows
 + Filter Search results by Genre or Search term
 + View Tv Show Details Including Number of Seasons
 + View Today's Airing TV Shows
 + Add Todays TV to Watchlist 
 + Mark Shows as Favorites
 + Remove Shows From Favorites
 + Remove From Watchlist
 + View Reviews of Selected TV show
 + Write a Review a Tv Show

## Setup requirements.

Once repo is cloned. 

At command line in project folder: 

+ 'npm install' to install dependencies
+ Setup TMDB account and request API Key for developers
+ Create .env file and add 'API_KEY=your_api_key'
+ 'npm run storybook' to start storybook service
+ 'npm start' to run react application on localhost:3000


## API Data Model.

+ Top-Rated Movies Endpoint: api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1

+ Sample response:
{
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/las0P4Dua54XrZ73VQmGUaH1z0U.jpg",
            "genre_ids": [
                16,
                28,
                18,
                878
            ],
            "id": 283566,
            "original_language": "ja",
            "original_title": "シン・エヴァンゲリオン劇場版:||",
            "overview": "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka, and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each of them live a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.",
            "popularity": 416.963,
            "poster_path": "/jDwZavHo99JtGsCyRzp4epeeBHx.jpg",
            "release_date": "2021-03-08",
            "title": "Evangelion: 3.0+1.0 Thrice Upon a Time",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 227
        },
        ....
    ],
    "total_pages": 452,
    "total_results": 9025
}

+ Get Tv Shows Endpoint:  `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`

Sample Response:
{
    "page": 1,
    "results": [
        {
            "backdrop_path": "/4N6zEMfZ57zNEQcM8gWeERFupMv.jpg",
            "first_air_date": "2021-08-11",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "id": 91363,
            "name": "What If...?",
            "origin_country": [
                "US"
            ],
            "original_language": "en",
            "original_name": "What If...?",
            "overview": "Taking inspiration from the comic books of the same name, each episode explores a pivotal moment from the Marvel Cinematic Universe and turns it on its head, leading the audience into uncharted territory.",
            "popularity": 2015.637,
            "poster_path": "/lztz5XBMG1x6Y5ubz7CxfPFsAcW.jpg",
            "vote_average": 8.6,
            "vote_count": 752
        },
        ....
}

+ GetUpcomingTvShows Endpoint: `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&timezone=GMT+1:00&include_adult=false&include_video=false&page=1`

+ Sample Response:
{
    "page": 1,
    "results": [
        {
            "backdrop_path": null,
            "first_air_date": "2011-08-18",
            "genre_ids": [],
            "id": 73106,
            "name": "Celebrity Big Brother's Bit on the Side",
            "origin_country": [
                "GB"
            ],
            "original_language": "en",
            "original_name": "Celebrity Big Brother's Bit on the Side",
            "overview": "The place to catch up on all things Celebrity Big Brother UK! Join Rylan Clark-Neal for the best mix of exclusive clips, news and reactions from the house, plus celebrity guests and live debates in the studio.",
            "popularity": 1386.118,
            "poster_path": "/4zr7J1UrdqiDyhNU2JHiqozUOLQ.jpg",
            "vote_average": 3,
            "vote_count": 2
        },
        ....
}

+ Get Tv Show Endpoint:   `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Response: 
 {
    "backdrop_path": null,
    "created_by": [],
    "episode_run_time": [
        45
    ],
    "first_air_date": "2011-08-18",
    "genres": [],
    "homepage": "http://www.channel5.com/show/bit-on-the-side/",
    "id": 73106,
    "in_production": true,
    "languages": [
        "en"
    ],
    "last_air_date": "2021-08-22",
    "last_episode_to_air": {
        "air_date": "2021-08-22",
        "episode_number": 18,
        "id": 3070852,
        "name": "",
        "overview": "",
        "production_code": "",
        "season_number": 13,
        "still_path": null,
        "vote_average": 0.0,
        "vote_count": 0
    },
    "name": "Celebrity Big Brother's Bit on the Side",
    "next_episode_to_air": {
        "air_date": "2021-08-23",
        "episode_number": 19,
        "id": 3070854,
        "name": "",
        "overview": "",
        "production_code": "",
        "season_number": 13,
        "still_path": null,
        "vote_average": 0.0,
        "vote_count": 0
    },
    "networks": [],
    "number_of_episodes": 349,
    "number_of_seasons": 15,
    "origin_country": [
        "GB"
    ],
    "original_language": "en",
    "original_name": "Celebrity Big Brother's Bit on the Side",
    "overview": "The place to catch up on all things Celebrity Big Brother UK! Join Rylan Clark-Neal for the best mix of exclusive clips, news and reactions from the house, plus celebrity guests and live debates in the studio.",
    "popularity": 1386.118,
    "poster_path": "/4zr7J1UrdqiDyhNU2JHiqozUOLQ.jpg",
    "production_companies": [],
    "production_countries": [
        {
            "iso_3166_1": "GB",
            "name": "United Kingdom"
        }
    ],
    "seasons": [
        {
            "air_date": "2011-08-18",
            "episode_count": 22,
            "id": 90988,
            "name": "Season 1",
            "overview": "",
            "poster_path": null,
            "season_number": 1
        },
        {
            "air_date": "2012-01-05",
            "episode_count": 23,
            "id": 202030,
            "name": "Season 2",
            "overview": "",
            "poster_path": null,
            "season_number": 2
        },
       .... More Seasons here ....
    ],
    "spoken_languages": [
        {
            "english_name": "English",
            "iso_639_1": "en",
            "name": "English"
        }
    ],
    "status": "Returning Series",
    "tagline": "",
    "type": "Scripted",
    "vote_average": 3.0,
    "vote_count": 2
}

+ Get TV Show Images Endpoint: https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&append_to_response=images&include_image_language=en,null`

+ Sample Response Data:
{
    "backdrops": [],
    "id": 60625,
    "logos": [],
    "posters": []
}

+ Get TV Show Reviews: https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Sample Response Data:
{
    "id": 60625,
    "page": 1,
    "results": [
        {
            "author": "Adishake",
            "author_details": {
                "name": "Adishake",
                "username": "adishake",
                "avatar_path": "/nWKDbbJ36wltQrxWNxMOKcyj79N.jpg",
                "rating": 9.0
            },
            "content": "**Rick and Morty** is one of the only TV Shows in the history of TV which was made for _smart-ass Dumb Science Loving Book-worms_ but ended up as a **mainstream Fan Gatherer**. It's pretty great how a show like this accomplished such greatness among the other Dumb hits.\r\n\r\nI really wouldn't believe any of my friends getting everything of it cause they always just seem bored when I start mumbling about Space, black-holes and stuff. _Yeah, I really get pretty protective when it comes to Rick and Morty... duh._",
            "created_at": "2020-10-23T16:28:24.707Z",
            "id": "5f9304a8b0cd20003784dbeb",
            "updated_at": "2021-06-23T15:58:46.478Z",
            "url": "https://www.themoviedb.org/review/5f9304a8b0cd20003784dbeb"
        }
    ],
    "total_pages": 1,
    "total_results": 1
}

+ Get Tv Show Genres:     "https://api.themoviedb.org/3/genre/tv/list?api_key=" +process.env.REACT_APP_TMDB_KEY +"&language=en-US"

+ Response: "genres": [
        {
            "id": 10759,
            "name": "Action & Adventure"
        },
        {
            "id": 16,
            "name": "Animation"
        },
        {
            "id": 35,
            "name": "Comedy"
        },
        {
            "id": 80,
            "name": "Crime"
        },
        {
            "id": 99,
            "name": "Documentary"
        },
        {
            "id": 18,
            "name": "Drama"
        },
        {
            "id": 10751,
            "name": "Family"
        },
        {
            "id": 10762,
            "name": "Kids"
        },
        {
            "id": 9648,
            "name": "Mystery"
        },
    ..... More Genres Here ...
    ]
}

+ Get TV Cast Endpoint: https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`

+ Sample Response Data:
"cast": [
        {
            "adult": false,
            "gender": 2,
            "id": 1245733,
            "known_for_department": "Acting",
            "name": "Justin Roiland",
            "original_name": "Justin Roiland",
            "popularity": 8.655,
            "profile_path": "/wYApP38aXe6ZcEtlBAfNRxJTQQi.jpg",
            "character": "Rick Sanchez / Morty Smith (voice)",
            "credit_id": "5347f65ac3a368670b0013f3",
            "order": 0
        },
        {
            "adult": false,
            "gender": 2,
            "id": 51382,
            "known_for_department": "Acting",
            "name": "Chris Parnell",
            "original_name": "Chris Parnell",
            "popularity": 7.849,
            "profile_path": "/aGzA5l9S89qLkhpSdjmkerFdZt0.jpg",
            "character": "Jerry Smith (voice)",
            "credit_id": "5347f684c3a368672d001411",
            "order": 1
        },
        {
            "adult": false,
            "gender": 1,
            "id": 176823,
            "known_for_department": "Acting",
            "name": "Spencer Grammer",
            "original_name": "Spencer Grammer",
            "popularity": 10.037,
            "profile_path": "/1L8Y45RJo2YxUXl6ldIowQay1V7.jpg",
            "character": "Summer Smith (voice)",
            "credit_id": "5347f72ec3a368670b00140b",
            "order": 2
        },
        {
            "adult": false,
            "gender": 1,
            "id": 49001,
            "known_for_department": "Acting",
            "name": "Sarah Chalke",
            "original_name": "Sarah Chalke",
            "popularity": 10.796,
            "profile_path": "/ycwiu89cpjqCtSNC5FjbJggjj5R.jpg",
            "character": "Beth Smith (voice)",
            "credit_id": "5347f693c3a3686723001484",
            "order": 3
        }
    ]
## App Design.

### Component catalogue.

....... Insert a screenshot from the Storybook UI showing your component catalogue. [For the Movies app, hi-light stories relating to new/modified components - see the example screenshot below] .......

![][stories]

### UI Design.

...... Insert screenshots of the app's views, with appropriate captions (see example below). (For the Movies Fan App, only show the new/modified views) ........

![][view]
>Shows detailed information on a movie. Clicking the 'Reviews' floating action button will display extracts from critic reviews.

### Routing.

...... Insert a list of the routes supported by your app and state the associated view. If relevant, specify which of the routes require authentication, i.e. protected/private. [For the Movies Fan app, only new routes should be listed.] ......... 

+ GET /blogs - displays all published blogs.
+ POST /blogs (protected) - add a new blog.
+ GET /blogs/:id - displays a particular blog.
+ GET /blogs/:id/comments (protected) - detail view of a particular blog and its comments.
+ etc.
+ etc.

## Independent learning (If relevant).

....... Briefly state any technologies/techniques used in your project codebase that was not covered in the lectures/labs. Provide source code filename (source code excerpts are not required in most cases) references to support your assertions and include references (articles/blogs) ......... 


[model]: ./data.jpg
[view]: ./view.png
[stories]: ./storybook.png