import { useState } from "react"
import Image from 'next/image'


const List = ({ listdata, host_name }) => {

    const [toggle, setToggle] = useState(false)

    const { rank, title, description, image } = listdata.attributes

    const checkImageURL = () => {
        if (process.env.NODE_ENV === 'development') {
            return `${host_name}${image.data.attributes.formats.large.url}`    
        } else if(process.env.NODE_ENV === 'production') {
            return image.data.attributes.formats.large.url
        }
    }
    
    const image_url = checkImageURL()

    const onToggle = (toggle) => {
        if (toggle) {
            setToggle(false)
        } else {
            setToggle(true)
        }
    }
    // font-size: 2rem;
    // cursor: pointer;
    // display: inline-block;

    // span{
    //     color: darkcyan;
    // }
    return (
        <>
            <div className="my-12 md:min-h-[35rem] min-h-[15rem] lg:min-h-[45rem]">
                <div className="">
                    <h2 className={`md:text-xl text-lg bg-[#eee] text-black dark:bg-stone-800 dark:text-white bg-opacity-70 px-2 cursor-pointer inline-block`} onClick={() => onToggle(toggle)}>{rank}. {title} <span className='text-[#eb3b3b]'>{!toggle && 'Click for Description'}</span></h2>
                    {/* <p style={{ clipPath: toggle ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : 'polygon(0 0, 100% 0, 100% 0, 0 0)', }}>
                    {description === "" ? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore iste eligendi adipisci obcaecati id accusamus quis hic nulla. Praesentium, eligendi laborum? Dignissimos in doloribus at nobis nisi velit excepturi voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus modi recusandae, quae officia officiis voluptatum ut repudiandae, enim corporis ex ipsum magni tempore ea esse aperiam deserunt quam cupiditate. Suscipit repudiandae ducimus vitae mollitia ea non vero, explicabo accusantium." : description}
                </p> */}
                    {/* <div className="hidden block"></div> */}
                    <p className={`${toggle ? 'block' : 'hidden'} dark:text-white bg-[#eee] dark:bg-stone-400 md:text-lg text-sm md:p-4 p-2`}>
                        {description}
                    </p>
                </div>
                <div className="flex justify-center my-12" style={{}}>
                    <div className='w-[65rem]'>
                        <Image src={image_url} alt="" width={1920} height={1080} layout="responsive" priority={true} />
                        {/* <img src={image_url} className="w-full" alt="" /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default List