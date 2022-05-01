import './style.css';
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const SERVER_URL2 = 'https://api.openweathermap.org/data/2.5/forecast';
const API_KEY = 'f660a2fb1e4bad108d6160b7f58c555f';

// api f660a2fb1e4bad108d6160b7f58c555f
// api  e3b896977946b7c8a36c3d3341f1dcc3
// api 85b3329d911fdb03a5450fbb580353ab

// api 116819f381b824e4abcba6b5a835d9d1

// api 139462cb612dc5ae174e7535994eaa74

// api bee009f5c1a622659c3940df9e537082

function ContentThreeFinish(props) {


            return ( props.fetcher2.list.map(item => {
                    let date = new Date(item.dt*1000);
                    let date2 = date.getDate();
                    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
                        "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
                    let date3 = monthNames[date.getMonth()];
                    let pDate = `${date2} ${date3}`;

                    let hours = date.getHours();
                    if (hours < 10) {
                        hours = "0" + hours
                    }
                    let minutes = date.getMinutes();
                    if (minutes < 10) {
                        minutes = "0" + minutes
                    }
                    let pTime = `${hours}:${minutes}`;

                    let temp = item.main.temp-273.15;
                    let pTemp = `Temperature: ${Math.floor(temp)} °`;

                    let pRain = item.weather[0].main;

                    let feelsLike = item.main.feels_like-273.15;
                    let feelsTemp = `Feels like: ${Math.floor(feelsLike)} °`;

                    let Background = '';
                    if (item.weather[0].id === 800) {
                        Background = 'url(https://openweathermap.org/img/wn/01d@2x.png)';
                    } else if (item.weather[0].id === 801) {
                        Background = 'url(https://openweathermap.org/img/wn/02d@2x.png)';
                    } else if (item.weather[0].id === 802) {
                        Background = 'url(https://openweathermap.org/img/wn/03d@2x.png)';
                    } else if (item.weather[0].id === 803 || item.weather[0].id === 804) {
                        Background = 'url(https://openweathermap.org/img/wn/04d@2x.png)';
                    } else if (item.weather[0].id > 199 && item.weather[0].id < 233) {
                        Background = 'url(https://openweathermap.org/img/wn/11d@2x.png)';
                    } else if (item.weather[0].id > 299 && item.weather[0].id < 322) {
                        Background = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
                    } else if (item.weather[0].id > 499 && item.weather[0].id < 505) {
                        Background = 'url(https://openweathermap.org/img/wn/10d@2x.png)';
                    } else if (item.weather[0].id === 511) {
                        Background = 'url(https://openweathermap.org/img/wn/13d@2x.png)';
                    } else if (item.weather[0].id > 519 && item.weather[0].id < 532) {
                        Background = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
                    } else if (item.weather[0].id > 599 && item.weather[0].id < 623) {
                        Background = 'url(https://openweathermap.org/img/wn/09d@2x.png)';
                    } else if (item.weather[0].id > 700 && item.weather[0].id < 782) {
                        Background = 'url(https://openweathermap.org/img/wn/50d@2x.png)';
                    }

                    return (
                        <ContentThree
                            pDate = {pDate}
                            pTime = {pTime}
                            pTemp = {pTemp}
                            pRain = {pRain}
                            feelsTemp = {feelsTemp}
                            background = {Background}
                            premission = {props.premission}
                        />
                    )
                })
            );



}

function ContentThree(props) {
    if  (!props.premission) return null;

    return(
        <div className="content_3" id="active">
            <p className="detailsCity2">{props.currentValue}</p>
            <div className="forecast">
                <p className="Date">{props.pDate}</p>
                <p className="Time">{props.pTime}</p>
                <p className="temp">{props.pTemp}</p>
                <p className="rain">{props.pRain}</p>
                <p className="feelsTemp">{props.feelsTemp}</p>
                <div className="thisCloud" style={{backgroundImage: props.background}}/>
            </div>
        </div>
    );


}

function ContentTwo(props) {
    const [temp,setTemp] = useState(37);

    const [feels_like,setFeels_like] = useState('');
    const [weather,setWeather] = useState('');
    const [sunriseHours,setSunriseHours] = useState('');
    const [sunsetHours,setSunsetHours] = useState('');
    const [sunriseMinutes,setSunriseMinutes] = useState('');
    const [sunsetMinutes,setSunsetMinutes] = useState('');

    useEffect(() => {
        let inf = props.fetcher;
                    setTemp(inf.main.temp-273.15);
                    setFeels_like(inf.main.feels_like-273.15);
                    setWeather(inf.weather[0].main);
                    setSunriseHours((new Date(inf.sys.sunrise*1000)).getHours() < 10 ? "0" + (new Date(inf.sys.sunrise*1000)).getHours() : (new Date(inf.sys.sunrise*1000)).getHours());
                    setSunsetHours((new Date(inf.sys.sunset*1000)).getHours() < 10 ? "0" + (new Date(inf.sys.sunset*1000)).getHours() : (new Date(inf.sys.sunset*1000)).getHours());
                    setSunriseMinutes((new Date(inf.sys.sunrise*1000)).getMinutes() < 10 ? "0" + (new Date(inf.sys.sunrise*1000)).getMinutes() : (new Date(inf.sys.sunrise*1000)).getMinutes());
                    setSunsetMinutes((new Date(inf.sys.sunset*1000)).getMinutes() < 10 ? "0" + (new Date(inf.sys.sunset*1000)).getMinutes() : (new Date(inf.sys.sunset*1000)).getMinutes());
    }, [props.fetcher])



    if  (!props.premission) return null;

    return (
        <div className="content_2" id="active">
            <p className="detailsCity">{props.currentValue}</p>
            <br/>
            <p className="detailsTemp">Temperature: {Math.floor(temp)}°<br/>
                Feels like: {Math.floor(feels_like)} °<br/>
                Weather: {weather}<br/>
                Sunrise: {sunriseHours}:{sunriseMinutes}<br/>
                Sunset: {sunsetHours}:{sunsetMinutes}</p>
        </div>
    );
}

function ContentOne(props) {


    const [background,setBackground] = useState('');
    const [backgroundLike,setBackgroundLike] = useState('');
    const [temp,setTemp] = useState(37);
    const [liked, setLiked] = useState([])
    const [deleteCity, setDeleteCity] = useState(props.deleteCity);

    // useEffect(() => {
    //
    //     let deleteIndex = liked.indexOf(deleteCity, 0)
    //     let delLiked = liked
    //     let megadel = delLiked.splice(deleteCity, 0)
    //     setLiked(megadel)
    // }, [deleteCity])

    useEffect(() => {
                     let inf = props.fetcher
                    setTemp(inf.main.temp-273.15);
                    if (inf.weather[0].id === 800) {
                        setBackground('url(https://openweathermap.org/img/wn/01d@2x.png)');
                    } else if (inf.weather[0].id === 801) {
                        setBackground('url(https://openweathermap.org/img/wn/02d@2x.png)');
                    } else if (inf.weather[0].id === 802) {
                        setBackground('url(https://openweathermap.org/img/wn/03d@2x.png)');
                    } else if (inf.weather[0].id === 803 || inf.weather[0].id === 804) {
                        setBackground('url(https://openweathermap.org/img/wn/04d@2x.png)');
                    } else if (inf.weather[0].id > 199 && inf.weather[0].id < 233) {
                        setBackground('url(https://openweathermap.org/img/wn/11d@2x.png)');
                    } else if (inf.weather[0].id > 299 && inf.weather[0].id < 322) {
                        setBackground('url(https://openweathermap.org/img/wn/09d@2x.png)');
                    } else if (inf.weather[0].id > 499 && inf.weather[0].id < 505) {
                        setBackground('url(https://openweathermap.org/img/wn/10d@2x.png)');
                    } else if (inf.weather[0].id === 511) {
                        setBackground('url(https://openweathermap.org/img/wn/13d@2x.png)');
                    } else if (inf.weather[0].id > 519 && inf.weather[0].id < 532) {
                        setBackground('url(https://openweathermap.org/img/wn/09d@2x.png)');
                    } else if (inf.weather[0].id > 599 && inf.weather[0].id < 623) {
                        setBackground('url(https://openweathermap.org/img/wn/09d@2x.png)');
                    } else if (inf.weather[0].id > 700 && inf.weather[0].id < 782) {
                        setBackground('url(https://openweathermap.org/img/wn/50d@2x.png)');
                    }
        setDeleteCity(props.deleteCity)
    }, [props.fetcher])

    useEffect(() => {
        if (props.likedToGray === true) {
            setBackgroundLike('likeRed')

        } else {
            setBackgroundLike('like')

        }
    }, [liked])

    useEffect(() => {
        if (props.likedToGray === true) {
            setBackgroundLike('likeRed')

        } else {
            setBackgroundLike('like')

        }
    })

    function handlerLikeButton() {
        props.handlerLikeButton(props.currentValue)
    }

    if  (!props.premission) return null;

    return (
        <div className="content_1" id="active">
            <h1 className="thisTemp">{`${Math.floor(temp)} \t°`}</h1>

            <div className="cloud" style={{backgroundImage: background}}/>

            <div className="city-like">
                <h2 className="thisCity">{props.currentValue}</h2>
                <button className={backgroundLike} onClick={handlerLikeButton}/>
            </div>
        </div>
        );
}


function Tabs(props) {

    const [active,setActive] = useState("tab-btn-1");
    const [liked, setLiked] = useState([]);


    // useEffect(() => {
    //     props.handlerLikedButton(liked);
    //
    // }, [liked])

     function handlerClick(e) {
         setActive(e.target.id);
    }

    return (
        <div className="tabs">
            <div className="tabs_info">
                <ContentOne handlerLikeButton={props.handlerLikeButton} deleteCity={props.deleteCity} likedToGray={props.likedToGray} premission={active === "tab-btn-1"} isloaded={props.isloaded} fetcher={props.fetcher} value={props.value}  currentValue={props.currentValue}/>
                <ContentTwo premission={active === "tab-btn-2"} isloaded={props.isloaded} fetcher={props.fetcher} value={props.value} currentValue={props.currentValue}/>
                <ContentThreeFinish premission={active === "tab-btn-3"} isloaded2={props.isloaded2} fetcher2={props.fetcher2} value={props.value} currentValue={props.currentValue}/>
            </div>
                <div className="inputRadio">
                    <input  type="radio" name="tab-btn" id="tab-btn-1" onClick={handlerClick}  checked={active === "tab-btn-1"}/>
                    <label htmlFor="tab-btn-1">Now</label>
                    <input type="radio" name="tab-btn" id="tab-btn-2" onClick={handlerClick} checked={active === "tab-btn-2"}/>
                    <label htmlFor="tab-btn-2">Details</label>
                    <input type="radio" name="tab-btn" id="tab-btn-3" onClick={handlerClick} checked={active === "tab-btn-3"}/>
                    <label htmlFor="tab-btn-3" id="right">Forecast</label>
                </div>
        </div>
    );
}

function AddedLocations(props) {


    function setCurrentLikeCity(pr) {
        props.setCurrentLikeCity(pr)
    }

    function handlerDelete(pr) {
        props.handlerDelete(pr)
    }

    if (props.liked.length > 0) {
    return (


        props.liked.map((item) => {
            return (
            <AddedLocationsReturn
                item={item}
                setCurrentLikeCity={setCurrentLikeCity}
                handlerDelete={handlerDelete}
                delCity={props.delCity}
            />
        )}
        )

)} else {
        return (
            <></>
        )
    }
}

function AddedLocationsReturn(props) {


    const [light,setLight] = useState(false)

    function handlerClick() {
        setLight(!light)
        props.setCurrentLikeCity(props.item)
    }

    function handlerDelete() {
        props.handlerDelete(props.item)
        props.delCity(props.item)
    }

    return (


                <div className="cityLike" >
                    <h2 onClick={handlerClick}>{props.item}</h2>
                    <button onClick={handlerDelete} className="delete"/>
                </div>


    )
}

function SearchForm(props) {

    const [value,setValue] = useState('')
    const [value2,setValue2] = useState('')

    function changeInput(e) {
        setValue(e.target.value)
    }

    function handlerSearch(e) {
        e.preventDefault();
        setValue2(value)
        props.func(value);
    }

    return (
        <div className="search">
            <form className="text" >
                <input type="text" value={value} onChange={changeInput}/>
                    <button className="searchBtn" onClick={handlerSearch}/>
            </form>
        </div>
    );
}

function Content(props) {
    const [value, setValue] = useState(['Moscow']);
    const [currentValue, setCurrentValue] = useState('Moscow');
    const [liked, setLiked] = useState([]);
    const [likedToGray, setLikedToGray] = useState(false);
    const [fetcher, setFetcher] = useState(null);
    const [fetcher2, setFetcher2] = useState(null);
    const [isloaded, setIsloaded] = useState(false);
    const [isloaded2, setIsloaded2] = useState(false);
    const [error, setError] = useState('');
    const [deleteCity, setDeleteCity] = useState("");




    function setCurrentLikeCity(pr) {
        setCurrentValue(pr)
    }

    function handlerDelete(pr) {
        setDeleteCity(pr)
    }

    useEffect(() => {
        setLiked(...liked, JSON.parse(localStorage.getItem('FavoriteCity')))
        setCurrentValue(localStorage.getItem('ThisCity'))
    }, [])

    useEffect(() => {
        localStorage.setItem('FavoriteCity', JSON.stringify(liked))
        console.log('SAVE')

    }, [liked])



    function onChange() {
        localStorage.setItem('ThisCity', (currentValue))
        console.log(localStorage.getItem('ThisCity'))
        console.log(...liked, JSON.parse(localStorage.getItem('FavoriteCity')))
    }




    useEffect(() => {

            let cityName = currentValue;
        const url = `${SERVER_URL}?q=${cityName}&appid=${API_KEY}`;
        let cityName2 = currentValue;
        const url2 = `${SERVER_URL2}?q=${cityName2}&appid=${API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then((result) => {
                    setFetcher(result)
                    setIsloaded(true)
                }, (error) => {
                    setError(error)
                    setIsloaded(true)
                }
            )
        fetch(url2)
            .then(response => response.json())
            .then((result) => {
                    setFetcher2(result)
                    setIsloaded2(true)
                }, (error) => {
                    setError(error)
                    setIsloaded2(true)
                }
            )


        setLikedToGray(liked.includes(currentValue, 0))
    }, [currentValue])


    useEffect(() => {
        setLikedToGray(liked.includes(currentValue, 0))
    }, [liked])


    function delCity(pr) {
        let newLiked = []
        liked.map(item => {
            if (item != pr) {
                newLiked = [...newLiked, item]
            }
        })
        setLiked(newLiked)

    }

    function changeValue(props) {
        setCurrentValue(props)
        setValue([props])
    }

    // function handlerLikedButton(pr) {
    //     setLiked(pr)
    // }

    function handlerLikeButton(pr) {
        if (!liked.includes(currentValue, 0)) {
            setLiked([...liked, pr])
        } else {
            alert('Данный город уже присутствует в избранном!')
        }

    }


    if (error) {
        return <p> Error {error}</p>
    } else if (!isloaded || !isloaded2) {
        return <p>Loading ...</p>
    } else {
        return (
            <div className="weather" onClick={onChange}>
                <SearchForm func={changeValue}/>
                <Tabs handlerLikeButton={handlerLikeButton} deleteCity={deleteCity} likedToGray={likedToGray} value={value} currentValue={currentValue} isloaded={isloaded} isloaded2={isloaded2} fetcher={fetcher} fetcher2={fetcher2}/>
                <div className="added-locations">
                    Added Locations:
                </div>
                <div className="locations">
                    <AddedLocations delCity={delCity} handlerDelete={handlerDelete} setCurrentLikeCity={setCurrentLikeCity} liked={liked}/>
                </div>

            </div>
        );
    }

}

function App() {
  return (
    <main>
        <Content/>
    </main>
  );
}

export default App;
