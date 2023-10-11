import Restaurntcard from "./Restaurntcard";
// import resObj from "./utils/Mock";
import {useState} from "react"
import {useEffect} from "react"
const Body = () =>{
    const [ListOfRest, setListOfRest] = useState([]);
    const [searchInput, setsearchInput] = useState("");
    const [FakeListOfRest, setfakeList] = useState([]);

useEffect(()=>{
    fetchData()
},[]);

    const fetchData = async () =>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1164827&lng=72.8373016&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        )
        const json = await data.json()
        setListOfRest(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfakeList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return (<div className="body">
        <div className="search">
            <input type="text" class="searchText" value = {searchInput}
            onChange={(e)=>{
                setsearchInput(e.target.value)
            }}/>
            <button className="searchBtn" onClick={()=>{
                const filterList = ListOfRest.filter((res)=>{
                    res.info.name.toLowerCase().includes(searchInput.toLowerCase())
                })
                setfakeList(filterList)
            }}>Search</button>

            
            <div className="ratingbtn">
                <button onClick={()=>{
                    const filteredList = FakeListOfRest.filter(
                        (FakeListOfRest) => FakeListOfRest.info.avgRating>4
                    )
                    setfakeList(filteredList)
                }}
                > Max ratings</button>
            </div>
            <div className="card">
                {FakeListOfRest.map((rst)=>(
                    <Restaurntcard resData={rst?.info}/>
                ))}

            </div>
        </div>
    </div>)

}
export default Body;