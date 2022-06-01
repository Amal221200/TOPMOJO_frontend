import React from 'react'
import MarkDownIt from 'markdown-it'

const Myself = ({message, blog}) => {
    const md = new MarkDownIt({
        html: true,
    })
    const htmlContent = md.render(blog.attributes.myself)
  return (
    <div className='max-w-screen-xl container min-h-screen px-7 mt-8 mx-auto prose prose-headings:text-center dark:prose-headings:text-gray-400 dark:prose-p:text-white dark:prose-strong:text-gray-500'>
        {!message ? (
            <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>
        ): (<h1>{message}</h1>)}
    </div>
  )
}

export default Myself

export const getStaticProps = async ()=> {
    try {
        const response = await (await fetch(`${process.env.API_URL}/api/myself`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()
    
        const blog = response.data
    
        return {
            props: {
                blog
            }
        }
    } catch (error) {
        return {
            props: {
                message: error.message
            }
        }
    }
}