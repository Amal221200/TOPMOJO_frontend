import Image from 'next/image'
import BlogList from '../components/BlogList'

export default function Home({ blogs, web_desc, message }) {


  return (
    <section className="text-gray-600 body-font min-h-screen">
      {!message ? (
        <>
          <main className={`relative my-0 mx-auto max-w-[100vw] flex justify-center flex-col min-h-[90vh] items-center z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[url(../public/main-bg.jpg)] before:dark:bg-[url(../public/main-bg-dark.jpg)] before:object-center before:bg-center before:bg-cover before:opacity-80 before:-z-10`}>
            <h2 className={`my-4 font-bold text-4xl text-black dark:text-[#eb3b3b]`}>{web_desc.attributes.title}</h2>
            <p className={`leading-7 text-orange-700 dark:text-red-600 text-2xl font-semibold px-5`}>{web_desc.attributes.description}</p>
          </main>
          <div className="container mx-auto px-5 py-24">
            <h3 className={`text-xl text-black dark:text-white my-4`}>Some Blogs</h3>
            <div className="flex flex-wrap -m-4 justify-center mx-auto lg:justify-start">
              {blogs.map(blog => (
                // 
                <BlogList key={blog.id} blog_slug={blog.attributes.blog_slug} blog_title={blog.attributes.title} blog_description={blog.attributes.description} />
              ))}
            </div>
          </div>
        </>
      ) : <h1>message</h1>
      }
      <Image src={"https://res.cloudinary.com/dwimzsevp/image/upload/v1653729522/large_AOT_40e363620e.jpg"} alt="" width={1920} height={1080} layout="responsive" priority={true} />
    </section>
  )
}

export const getServerSideProps = async (context) => {
  try {
    const response = await (await fetch(`${process.env.API_URL}/api/blog-descriptions`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
      }
    })).json()

    const response2 = await (await fetch(`${process.env.API_URL}/api/website-description`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
      }
    })).json()

    const blogs = response.data
    const web_desc = response2.data
    return {
      props: {
        blogs,
        web_desc
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