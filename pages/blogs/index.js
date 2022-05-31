import Link from 'next/link'
import React from 'react'
import Blog from '../../components/Blog'

const Blogs = ({ blogs, message }) => {
    return (
        <section className='min-h-screen'>
            <div className='container py-4 px-2 mx-auto text-black dark:text-white'>
                <div className='flex flex-wrap'>
                    {!message ? (
                        blogs.map(blog => {
                            return (
                                <Blog key={blog.id} blogDate={new Date(blog.attributes.updatedAt).toLocaleDateString()} blogSlug={blog.attributes.slug.data.attributes.slug} blogTitle={blog.attributes.title} blogDescription={blog.attributes.description} />
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

export const getStaticProps = async (context) => {
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