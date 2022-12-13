import {useState, useEffect} from 'react'

const Picking = (props) => {

    const [genre1, setgenre1] = useState('')
    const [genre2, setgenre2] = useState('')
    const [genre3, setgenre3] = useState('')   
    const [tag1, setTag1] = useState('')
    const [tag2, setTag2] = useState('')
    const [tag3, setTag3] = useState('')

    const [stopGenre, setStopGenre] = useState(true)
    const [stopTags, setStopTag] = useState(false)

    const [selectedGenres, setSelectedGenres] = useState([])
    const [selectedTags, setSelectedTags] = useState([])

    const [api, setApi] = useState('https://api.rawg.io/api/games?key=bd22e2296caa4c9894e666410ee4945a&metacritic=75,100&page_size=40')
    
    const [allGenres, setAllGenres] = useState(['Action', 'Indie', 'Adventure', 'RPG', 'Strategy', 'Shooter', 'Casual', 'Simulation', 'Puzzle', 'Arcade', 'Platformer', 'Racing', 'Family', 'Board Games', 'Educational', 'Card'])
    const [allTags, setAllTags] = useState(['SinglePlayer', 'Atmospheric', "Full controller support", "Open World", "Story Rich", "Difficult", "Exploration", "Cute", "Dark Fantasy", "Multiple Endings", "Multiplayer", "Co-op", "First-Person", "FPS", "Sci-fi", "Survival", "Free to Play", "Tactical", "PvP", "Team-Based", "Cinematic", "Cyberpunk", "combat", "Battle Royale", "RPG", "Third Person", "Horror", "Dystopian"])

    const generateRandomNumbers = (max) => {
        const randoms = []

        while (randoms.length < 3) {
            const r = Math.floor(Math.random() * max)
            if (randoms.indexOf(r) === -1) {
                randoms.push(r)
            }
        }
        setgenre1(allGenres[randoms[0]])
        setgenre2(allGenres[randoms[1]])
        setgenre3(allGenres[randoms[2]])
    
        console.log(randoms)
    }

    const generateRandomNumbers2 = (max) => {
        const randoms = []

        while (randoms.length < 3) {
            const r = Math.floor(Math.random() * max)
            if (randoms.indexOf(r) === -1) {
                randoms.push(r)
            }
        }
        setTag1(allTags[randoms[0]])
        setTag2(allTags[randoms[1]])
        setTag3(allTags[randoms[2]])
    
        console.log(randoms)
    }

    const makeTagButtons = () => {
        return (
            <>
            <button onClick={() => {
                getNewAddressTag()
                setSelectedTags([...selectedTags, tag1])
                allTags.splice((allTags.indexOf(tag1)), 1)

                generateRandomNumbers2(allTags.length - 1)
                // stopTagFunction()
            }}>
                {tag1}
            </button>

            <button onClick={() => {
                getNewAddressTag()
                setSelectedTags([...selectedTags, tag2])
                allTags.splice((allTags.indexOf(tag2)), 1)

                generateRandomNumbers2(allTags.length - 1)
                // stopTagFunction()
            }}>
                {tag2}
            </button>

            <button onClick={() => {
                getNewAddressTag()
                setSelectedTags([...selectedTags, tag3])
                allTags.splice((allTags.indexOf(tag3)), 1)

                generateRandomNumbers2(allTags.length - 1)
                // stopTagFunction()
            }}>
                {tag3}
            </button>
            </>
        )
    }

    const makeGenreButtons = () => {
        console.log('running genres')
        return (
            <>
            <button onClick={() => {
                // giving the new values to newaddress
                getNewAddressGenre(genre1.toLowerCase());
                // storing what the user picked to selectedGenres
                setSelectedGenres([...selectedGenres, genre1])
                // taking out selected genre from allGenres so that user can't pick it again
                allGenres.splice((allGenres.indexOf(genre1)), 1);

                // calling the random numbers function so that we can have new set of genres
                generateRandomNumbers(allGenres.length - 1)
                // calling the stop functions after we selected 3 genres
                stopGenreFunction()
                
                console.log(selectedGenres)
                console.log(allGenres)

            }}>
                {genre1}
            </button>

            <button onClick={() => {

                getNewAddressGenre(genre2.toLowerCase());
                setSelectedGenres([...selectedGenres, genre2])
                allGenres.splice((allGenres.indexOf(genre2)), 1)


                generateRandomNumbers(allGenres.length - 1)
                stopGenreFunction()

            }}>
                {genre2}
            </button>
            
            <button onClick={() => {
                getNewAddressGenre(genre3.toLowerCase());
                setSelectedGenres([...selectedGenres, genre3])
                allGenres.splice((allGenres.indexOf(genre3)), 1)

                generateRandomNumbers(allGenres.length - 1)
                stopGenreFunction()

            }}>
                {genre3}
            </button>
            </>
        )
    }
    const getResult = () => {

    }

    const getNewAddressGenre = (genre) => {
        setApi(api + `&genres=${genre}`)
    }

    const getNewAddressTag = (tag) => {
        setApi(api + `&tags=${tag}`)
    }

    const stopGenreFunction = () => {
        if (allGenres.length < 14) {
            setStopGenre(false)
            setStopTag(true)
        }
    }

    const stopTagFunction = () => {
        if (allTags.length < 26) {
            setStopTag(false)
        }
    }

    useEffect(() => {
        generateRandomNumbers(allGenres.length - 1)
        generateRandomNumbers2(allTags.length -1)
    }, [])

    return(
        <>
            
            {stopGenre ? makeGenreButtons() : null}
            {stopTags ? makeTagButtons() : null}
        </>
    )
        
}





export default Picking
