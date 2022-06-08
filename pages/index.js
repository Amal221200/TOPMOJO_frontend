import CategoryHome from '../components/CategoryHome'

export default function Home({ web_desc, message, categories, filteredBlog }) {

  return (
    <section className="text-gray-600 body-font min-h-screen">
      {!message ? (
        <>
          <main className={`relative my-0 mx-auto max-w-[100vw] flex justify-center flex-col min-h-[90vh] md:min-h-screen items-center z-10 before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-[url(../public/main-bg.jpg)] before:dark:bg-[url(../public/main-bg-dark.jpg)] before:object-center before:bg-center before:bg-cover before:opacity-80 before:-z-10`}>
            <h2 className={`my-4 font-bold text-4xl text-black dark:text-[#eb3b3b]`}>{web_desc.attributes.title}</h2>
            <p className={`leading-7 text-orange-700 dark:text-red-600 text-lg md:text-2xl font-semibold px-5`}>{web_desc.attributes.description}</p>
          </main>
          <div className="container mx-auto px-5 py-24">

            {categories.map(category => (
              <CategoryHome key={category.id} category={category.attributes.category} filteredBlog={filteredBlog} />
            ))}
          </div>
        </>
      ) : <h1 className='text-center text-xl mt-4'>{message}</h1>
      }
    </section>
  )
}

export const getStaticProps = async (context) => {
  try {
    const response2 = await (await fetch(`${process.env.API_URL}/api/website-description`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
      }
    })).json()

    const response3 = await (await fetch(`${process.env.API_URL}/api/categories`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API}`
      }
    })).json()

    const web_desc = response2.data
    const categories = response3.data


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

    return {
      props: {
        web_desc,
        categories,
        filteredBlog
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