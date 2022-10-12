import './App.css';
import { useState } from 'react';
var movieList = {

  "Action":[

    {
    Name: "War",
    image:"/images/War-01.jpg",
    youTube:"https://youtu.be/tQ0mzXRk-oM",
    rating: "4/5"
    },

    {
      Name: "Don2",
      image:"/images/don2.jpg",
      youTube:"https://youtu.be/_X5w-6PqoZ0",
      rating: "3/5"
    },

    {
      Name: "shershaah",
      image:"/images/shershaah.jpg",
      youTube:"https://youtu.be/Q0FTXnefVBA",
      rating: "5/5"
    }
  ],

  "Comedy":[
    {
    Name: "Dhamaal",
    image:"/images/dhamaal.jpg",
    youTube:"https://youtu.be/LZX2NAR_QlY",
    rating: "4/5"
    },
    {
      Name: "Golmaal",
      image:"/images/golmaal.jpg",
      youTube:"https://youtu.be/3fO1f9TndAM",
      rating: "3/5"
      
    },
    {
      Name: "Bhool Bhulaiyaa 2",
      image:"/images/bhool-bhualiyaa.jpg",
      youTube:"https://youtu.be/P2KRKxAb2ek",
      rating: "2/5"
    }
    
  ],
  "Romantic":[
    {
    Name: "Student Of The Year",
    image:"/images/soty.jpg",
    youTube:"https://youtu.be/fivOhPjX9YM",
    rating: "3/5"
    },
    {
      Name: "Yeh Jawaani Hai Deewani",
      image:"/images/yjhd.jpg",
      youTube:"https://youtu.be/Rbp2XUSeUNE",
      rating: "4/5"
    },
    {
      Name: "Tadap",
      image:"/images/Tadap.jpg",
      youTube:"https://youtu.be/mOBqu1z5mn8",
      rating: "2/5"
    }
    
  ],
  "Thriller":[
    {
    Name: "Drishyam",
    image:"/images/drishyam.jpg",
    youTube:"https://youtu.be/AuuX2j14NBg",
    rating: "5/5"
    },
    {
      Name: "NH 10",
      image:"/images/nh-10.jpg",
      youTube:"https://youtu.be/A9icNqWlylw",
      rating: "4/5"
    },
    {
      Name: "Talvar",
      image:"/images/talvar.webp",
      youTube:"https://youtu.be/aQNMsw8Ljjc",
      rating: "3/5"
    }
  ]
}
function App() {
  const [genreName,setGenreName] = useState("Action");
  function genreClickHandler(genre) {
    setGenreName(genre);
  }
  return (
    <div className="App">
      <header>
        <h1> 🎬Movies Recommendation🍿</h1>
        <nav>
          {Object.keys(movieList).map(genre => 
           <li key={genre} onClick={() => genreClickHandler(genre)} className='genre'>{genre}</li>
           )}
          
        </nav> 
      </header>
      <div className='divider'>
        <h2 className='para'>Click on the image to watch trailer.</h2>
        <main className='container'>
          {

            movieList[genreName].map(movie => 
              <a className='movie-info' href={movie.youTube} alt={movie.Name} key={movie.number} target="_blank">
                <img src={movie.image} alt={movie.Name} className='movie-image' />
                <span className='movie.Name'>{movie.Name}</span>
                <span className='movie.rating'>{movie.rating}</span>
              </a>
            )}

          </main>
      </div>
    </div>
  );
}

export default App;
