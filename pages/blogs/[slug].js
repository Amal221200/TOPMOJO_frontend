import React from 'react'
import List from '../../components/List'
import Main from '../../components/Main'

const Blogs = ({ list, blog_desc, err, theme, host_name }) => {
    
    return (
        <div className='container mx-auto'>
            {!err ? <Main title={blog_desc.attributes.title} description={blog_desc.attributes.description} /> : <h1>{err}</h1>}
            <div className="container mt-8 px-4">
                {!err && list.map((listdata)=> (
                    <List key={listdata.attributes.rank} theme={theme} host_name={host_name} listdata={listdata} />
                ))}
            </div>
        </div>
    )
}

export default Blogs

export const getServerSideProps = async (context) => {
    const { slug } = context.query
    try {
        const response = await (await fetch(`${process.env.API_URL}/api/top-10s?filters[${process.env.TOP_10_SLUG}][$eq]=${slug}&sort=rank:DESC&populate=*`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()
        const response2 = await (await fetch(`${process.env.API_URL}/api/blog-descriptions?filters[${process.env.BLOG_DESC_SLUG}][$eq]=${slug}`, {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
            }
        })).json()
    
        const list = response.data
        const blog_desc = response2.data[0]
        return {
            props: {
                list,
                blog_desc,
                host_name: process.env.API_URL
            }
        }
    }
    catch (err){
        
        return {
            props: {
                err: err.message
            }
        }
    }
}