import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from 'react-router-dom'
function Hollywood() {
    const [data] = useContext(Store)
    console.log(data)
    return (
        <div className="bollyWoodContainer">
            <div>
                <h1 className="line">Hollywood</h1>


                {data.filter((data) => data.cat === "Hollywood").map((item, index) => {
                    console.log(item)

                    return (
                        <>

                            <div key={index} className="bollySet">
                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" className="BollyImage" />
                                </Link>
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    <p>{item.cont.slice(0, 70)}</p>
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
                {data.filter((data) => data.cat === "Hollywood").map((item, index) => {
                    if (item.id == 30) {
                        return (

                            <div className="TOP-BODY" key={index}>

                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" id="TOP_POST_IMG" className="topPostBig" />
                                </Link>
                                {/* <div className="TOP-CONTENT"> */}
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    {/* <h2 className="number">{++count}</h2> */}
                                {/* </div> */}
                            </div>
                        )
                    } else if (item.id >= 31 && item.id <= 38) {
                        return (
                            <div key={index} className="topPostContent">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="topPostImg" />
                                </Link>
                                <div className="topPostContent2">
                                    <div className="content2">
                                        <h2>{item.title}</h2>
                                        <p>{item.cat}</p>
                                    </div>
                                    {/* <h2>{++count}</h2> */}
                                </div>
                            </div>
                        )
                    }
                })}
                <h1 className="addCenter">Advertisement</h1>
                <div className="add">
                    <img className="addImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2IZ1Yku50b-BiARKwl-stItuYHtPXy8haGMIlgGbhdGl1PLbTHR0N51y3JOP0vkQANI&usqp=CAU" />
                </div>
                {/* <h1>Advertisement</h1>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2IZ1Yku50b-BiARKwl-stItuYHtPXy8haGMIlgGbhdGl1PLbTHR0N51y3JOP0vkQANI&usqp=CAU" width={"450"} height={"695"}/>  */}
            </div>
        </div>
    )

}
export default Hollywood