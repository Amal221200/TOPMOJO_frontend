import { useState, useEffect } from 'react'
import Blog from './Blog'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper'
import { customMethods } from '../customMethods/customMethods'


const Category = ({ category }) => {
    const [blogs, setBlogs] = useState([])
    const [mounted, setMounted] = useState(false)

    const { capitalize } = customMethods

    const fetchFilteredBlogs = async () => {
        const resp = await (await fetch(`${process.env.API_URL}/api/blog-descriptions?populate=*&sort=updatedAt:DESC&filters[categories][category][$eq]=${category}`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()

        setBlogs(resp.data)
        setMounted(true)
    }


    useEffect(fetchFilteredBlogs, [category])

    if (!mounted) return null
    return (
        <div className='mb-6'>
            <h3 className={`text-xl text-black dark:text-white mb-4`}>{capitalize(category)}</h3>
            <div className='flex flex-wrap'>
                <Swiper modules={[FreeMode]} grabCursor={true} slidesPerView={blogs.length <= 2 ? blogs.length : 2} breakpoints={{
                    768: {
                        slidesPerView: blogs.length <= 3 ? blogs.length : 3
                    }
                }} freeMode={{ enabled: true }}>
                    {blogs.map(blog => {
                        return (
                            <SwiperSlide key={blog.id} >
                                <Blog blogDate={new Date(blog.attributes.updatedAt).toLocaleDateString()} blogSlug={blog.attributes.slug.data.attributes.slug} blogTitle={blog.attributes.title} blogDescription={blog.attributes.description} />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default Category