import Fondo from "/src/assets/images/image-interactive.jpg"

export const Seccion1 = () => {
    return (
        <div className="flex m-35  ">

            <img className='w-[50%]' src={Fondo} />
            <div className="h-[50%] ">
                <div className="bg-white p-10 ">
                    <h1>
                        The leader in interactive VR
                    </h1>
                    <p>
                        Founded in 2011, Loopstudios has been producing world-class virtual reality
                        projects for some of the best companies around the globe. Our award-winning
                        creations have transformed businesses through digital experiences that bind
                        to their brand.
                    </p>

                </div>
            </div>

        </div>
    )
}
