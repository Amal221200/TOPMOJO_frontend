import React from 'react'
import Category from '../../components/Category'

const Blogs = ({ categories }) => {
    return (
        <section className='min-h-screen'>
            <div className='container py-4 px-2 mx-auto text-black dark:text-white md'>
                {categories.map(category => (
                    <Category category={category.attributes.category} key={category.id} />
                ))}
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

        const response2 = await (await fetch(`${process.env.API_URL}/api/categories`, {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
          })).json()

        const blogs = response.data
        const categories = response2.data

        return {
            props: {
                blogs,
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