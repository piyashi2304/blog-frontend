import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom";

function Home() {
    const [data] = useContext(Store);
    // console.log(data)
    return (
        <>
            <div className="image-home">
                <img className="image1" src="https://media.istockphoto.com/id/519330110/photo/taj-mahal-agra-india-monument-of-love-in-blue-sky.jpg?s=612x612&w=0&k=20&c=Uma6Q7KduznA6jUKcSquFP1iHHiw8UXcZEYVLONrmaQ=" />
                <img className="image2" src="https://assets.website-files.com/62311413466139dfed65b237/62e2db292064333f5102a3bf_Artboard%201%20copy-100.jpg" />
                <img className="image3" src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.jpg?s=612x612&w=0&k=20&c=Ib8RLw3_eCOo9N3YE4pvp9rcb_WmirjS-9x9R-vTd68=" />
            </div>
            <h1 className="line">The Latest</h1>
            <div className="latest">

                {data.filter((data) => data.cat === "Home").map((item, index) => {
                    // console.log(item)
                    if (item.id >= 4 && item.id <= 6)

                        return (
                            <div className="latest">

                                <div key={index} className="homeSet">
                                    <Link to={`/details/${item.id}`}>

                                        <img src={item.img} alt="not found" className="homeImage" />
                                    </Link>
                                    <div className="homeContent">
                                        <h2>{item.title}</h2>
                                        <p className="HOME_CONT">{item.cont.slice(0, 148)}</p>
                                        <p>{item.cat}</p>

                                    </div>
                                </div>

                            </div>
                        )
                })}

            </div>

            <h1 className="line">Latest Article</h1>
            <div className="latest-Article">
                <div className="latestArticle">

                    {data.filter((data) => data.cat === "Home").map((item, index) => {
                        // console.log(item)
                        if (item.id >= 4 && item.id <= 6)

                            return (
                                <div className="latest">

                                    <div key={index} className="homeSet2">
                                        <Link to={`/details/${item.id}`}>

                                            <img src={item.img} alt="not found" className="homeImage2" />
                                        </Link>
                                        <div className="homeContent2 ">
                                            <h2>{item.title}</h2>
                                            <p className="HOME_CONT">{item.cont.slice(0, 120)}</p>
                                            <p className="HOME_CAT">{item.cat}</p>

                                        </div>
                                        {/* <hr /> */}
                                    </div>

                                </div>
                            )
                    })}
                    <div>
                        {data.filter((data) => data.cat === "Home" && data.id==2).map((item, index) => {
                            return (
                                <div div key={index}>
                                    <Link to={`/details/${item.id}`}>

                                        <img src={item.img} alt="not found" className="singleImge" />
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div>
              
                <h1 className="addCenter">Advertisement</h1>
                    <div className="Homeadd">
                    
                         <img className="HOMEADD" src="https://gumlet.assettype.com/afaqs/2023-04/2e116ca4-df3e-447d-a90c-a927ecbb3022/Swiggy_Dineout___Great_Indian_Restaurant_Festival_Picture.png?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0"/> 
                    </div>
                    <h1  id="line_Top"className="line ">Top Post</h1>
                    {data.filter((data) => data.cat === "Home").map((item, index) => {
                        if (item.id == 1) {
                            return (

                                <div key={index}>

                                    <Link to={`/details/${item.id}`}>

                                        <img src={item.img} alt="not found" className="topPostBig" />
                                    </Link>
                                    <div className="TopPostContent1 homeContent2">
                                        <h2>{item.title}</h2>
                                        <p className="HOME_CAT1">{item.cat}</p>
                                        {/* <h2 className="number">{++count}</h2> */}
                                    </div>
                                </div>
                            )
                        } else if (item.id >= 2 && item.id <= 4) {
                            return (
                                <div key={index} className="topPostContent">
                                    <Link to={`/details/${item.id}`}>
                                        <img src={item.img} alt="not found" id="CONT_IMG" className="HometopPostImg" />
                                    </Link>
                                    <div className="topPostContent2">
                                        <div className="content2 CONT">
                                            <h2>{item.title}</h2>
                                            <p>{item.cat}</p>
                                        </div>
                                        {/* <h2>{++count}</h2> */}
                                    </div>
                                </div>
                            )
                        }
                    })}

                </div>
            </div>
            <h1 className="line">Latest Story</h1>
            <div className="storyContainer">
            {data.filter((data)=>data.cat==="Home" && data.id%2==0).map((item,index)=>{
                return(
                    <div div key={index} className="story">
                    <p>{item.cont}</p>
                    </div>
                )
            })}
            </div>
        </>
    )
}
export default Home