import React from 'react'
import Category from '../../components/Category'

const Blogs = ({ categories, filteredBlog }) => {
    return (
        <section className='min-h-screen'>
            <div className='container py-4 px-2 mx-auto text-black dark:text-white md'>
                {categories.map(category => (
                    <Category category={category.attributes.category} key={category.id} filteredBlog={filteredBlog} />
                ))}
            </div>
        </section>
    )
}

export default Blogs

export const getStaticProps = async (context) => {
    try {
        const response2 = await (await fetch(`${process.env.API_URL}/api/categories`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()

        const response = await (await fetch(`${process.env.API_URL}/api/blog-descriptions?populate=categories&populate=slug`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()

        const blogs = response.data
        let filteredBlog = {}

        blogs.forEach(blog => {
            blog.attributes.categories.data.forEach((category, categoryIndex) => {
                filteredBlog = { ...filteredBlog, [category.attributes.category]: blogs.filter(blog => blog.attributes.categories.data[categoryIndex].attributes.category === category.attributes.category) }
            })
        })

        const categories = response2.data

        return {
            props: {
                filteredBlog,
                categories
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