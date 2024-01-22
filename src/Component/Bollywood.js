import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"

function Bollywood() {
    // let count = 0
    const [data] = useContext(Store)
    console.log(data)
    return (
        <div className="bollyWoodContainer">
            <div>
                <h1 className="line">Bollywood</h1>
                {data.filter((data) => data.cat === "Bollywood").map((item, index) => {
                    console.log(item)
                    return (
                        <>
                            <div key={index} className="bollySet">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="BollyImage"/>
                                </Link>
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    <p>{item.cont.slice(0, 150)}</p>
                                    <p>{item.cat}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
            <div>
                <h1 className="line">Top Post</h1>
                {data.filter((data) => data.cat === "Bollywood" ).map((item, index) => {
                    if (item.id == 12) {
                        return (

                            <div className="TOP-BODY" key={index}>

                                <Link to={`/details/${item.id}`}>
                              
                              <img src={item.img} alt="not found" id="TOP_POST_IMG" className="topPostBig" />
                                </Link>
                                {/* <div className="TOP-CONTENT"> */}
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    {/* <h2 className="number">{++count}</h2>  */}
                                {/* </div> */}
                            </div>
                           
                        )
                    
                    }
                    
                    else if (item.id >= 12 && item.id <= 17) {
                        return (
                            <div key={index} className="topPostContent">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="topPostImg"/>
                                </Link>
                                <div className="topPostContent2">
                                    <div className="content2">
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    </div>
                                    {/* <h2>{++count}</h2>  */}
                                </div>
                            </div>
                        )
                    }
                })}
                <h1>Advertisement</h1>
                <div className="ADDVER">
         <img id="B0lly_Add" src="https://www.theweek.in/content/dam/week/webworld/feature/society/2016/august/images/maggi-1.jpg.image.470.274.jpg" className="addver"/>
         </div>
            </div>
        </div>
    )
}
export default Bollywood