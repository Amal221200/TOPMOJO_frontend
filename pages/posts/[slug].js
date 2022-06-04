import React from 'react'
import MarkdownIt from 'markdown-it'

const Post = ({ post }) => {
    const md = new MarkdownIt();

    const htmlContent = md.render(post.attributes.content)
    return (
        <section className='max-w-screen-2xl container min-h-screen px-7 mt-8 mx-auto prose prose-headings:font-semibold prose-h1:text-center prose-img:w-[70rem] dark:prose-a:text-[#eb3b3b] dark:prose-headings:text-gray-400 dark:prose-p:text-gray-200 dark:prose-strong:text-white '>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="prose-img:block prose-img:mx-auto"></div>
        </section>
    )
}

export default Post

export const getStaticPaths = async () => {
    const response = await (await fetch(`${process.env.API_URL}/api/blog-descriptions?populate=slug`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
        }
    })).json()

    const paths = response.data.map(blog => {
        return {
            params: { slug: blog.attributes.slug.data.attributes.slug }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const response = await (await fetch(`${process.env.API_URL}/api/posts?populate=*&filters[slug][slug][$eq]=${params.slug}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
        }
    })).json()

    const post = response.data[0]

    return {
        props: {
            post
        }
    }
}