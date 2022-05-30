import Link from 'next/link'
import React from 'react'

const Blogs = ({ blogs, message }) => {
    return (
        <section className='min-h-screen'>
            <div className='container py-4 mx-auto text-black dark:text-white'>
                <div className='flex flex-wrap'>
                    {!message ? (
                        blogs.map(blog => {
                            return (
                                <div key={blog.id} className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 lg:m-0 m-2 border-l-2 border-gray-800 dark:border-gray-200 border-opacity-60">
                                    <h2 className="text-lg sm:text-xl text-gray-900 dark:text-neutral-500 font-medium title-font md:mb-4 mb-2">{blog.attributes.title}</h2>
                                    <h3 className='my-2 text-gray-900 dark:text-neutral-500'>{new Date(blog.attributes.updatedAt).toLocaleDateString()}</h3>
                                    <p className="leading-relaxed text-base mb-4 text-black dark:text-white lg:flex lg:items-center lg:min-h-[15rem]">{blog.attributes.description}</p>
                                    <Link href={`/blogs/${blog.attributes.slug.data.attributes.slug}`}>
                                        <a className="text-[#eb3b3b] inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </Link>
                                </div>
                            )
                        })
                    ) : (
                        <h1>{message}</h1>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Blogs

export const getServerSideProps = async (context) => {
    try {

        const response = await (await fetch(`${process.env.API_URL}/api/blog-descriptions?populate=slug&sort=updatedAt:DESC`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()

        const blogs = response.data

        return {
            props: {
                blogs
            }
        }
    } catch (err) {
        return {
            props: {
                message: err.message
            }
        }
    }
}