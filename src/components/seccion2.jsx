import Ear from "../assets/images/image-deep-earth.jpg"
import Curi from "../assets/images/image-curiosity.jpg"
import Fish from "../assets/images/image-fisheye.jpg"
import Above from "../assets/images/image-from-above.jpg"
import Grid from "../assets/images/image-grid.jpg"
import Night from "../assets/images/image-night-arcade.jpg"
import Pocket from "../assets/images/image-pocket-borealis.jpg"
import Soccer from "../assets/images/image-soccer-team.jpg"

export const Seccion2 = () => {
    return (
        <div className="m-35 flex flex-col gap-20" >
            <div className="flex justify-between">
            <h1 className="text-3xl text-gray-500">Our creations</h1>
            <a className="hover:bg-gray-400 border-2 border-gray-600 px-4  " href="/">See all</a>
            </div>
            <div className="flex flex-col gap-6 items-center">
                <div className="flex  gap-6">
                    <img src={Ear} alt="" />
                    <img src={Night} alt="" />
                    <img src={Soccer} alt="" />
                    <img src={Grid} alt="" />
                </div>
                <div className="flex gap-6">
                    <img src={Above} alt="" />
                    <img src={Pocket} alt="" />
                    <img src={Curi} alt="" />
                    <img src={Fish} alt="" />
                </div>
            </div>
        </div>
    )
}


