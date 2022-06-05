import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { TailSpin } from 'react-loader-spinner'
import { FreeMode } from 'swiper'
import { useEffect, useState } from 'react'
import BlogHome from './BlogHome'
import { customMethods } from '../customMethods/customMethods'

const CategoryHome = ({ category }) => {
    const [blogs, setBlogs] = useState([])
    const [mounted, setMounted] = useState(false)

    const { capitalize } = customMethods

    useEffect(() => {
        const fetchFilteredBlogs = async () => {
            const resp = await (await fetch(`${process.env.API_URL}/api/blog-descriptions?populate=*&sort=updatedAt:DESC&filters[categories][category][$eq]=${category}`, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
                }
            })).json()

            setBlogs(resp.data)
            setMounted(true)
        }
        fetchFilteredBlogs()
    }, [category])

    if (!mounted) {
        return (
            <div className='min-h-[20rem] flex justify-center items-center'>
                <TailSpin color="#eb3b3b" height={40} width={40} />
            </div>
        )
    }

    return (
        <>
            <h3 className={`text-xl text-black dark:text-white mb-4`}>{capitalize(category)}</h3>
            <div className="flex flex-wrap justify-center mx-auto lg:justify-start">
                <Swiper modules={[FreeMode]} grabCursor={true} slidesPerView={blogs.length === 1 ? blogs.length : 1} breakpoints={{
                    768: {
                        slidesPerView: blogs.length <= 2 ? blogs.length : 2
                    },
                    1024: {
                        slidesPerView: blogs.length <= 3 ? blogs.length : 3
                    }
                }} freeMode={{ enabled: true }}>
                    {blogs.map(blog => (
                        <SwiperSlide key={blog.id} >
                            <BlogHome blogDate={new Date(blog.attributes.updatedAt).toLocaleDateString()} blogSlug={blog.attributes.slug.data.attributes.slug} blogTitle={blog.attributes.title} blogDescription={blog.attributes.description} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default CategoryHome