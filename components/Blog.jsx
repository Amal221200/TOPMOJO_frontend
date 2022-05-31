import React from 'react'
import Link from 'next/link'

const Blog = ({ blogSlug, blogDate, blogTitle, blogDescription }) => {
  return (
    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 lg:m-0 m-2 border-l-2 border-gray-800 dark:border-gray-200 border-opacity-60">
      <h2 className="text-lg sm:text-xl text-gray-900 dark:text-neutral-500 font-medium title-font md:mb-4 mb-2">{blogTitle}</h2>
      <h3 className='my-2 text-gray-900 dark:text-neutral-500'>{blogDate}</h3>
      <p className="leading-relaxed text-base mb-4 text-black dark:text-white lg:flex lg:items-center lg:min-h-[15rem]">{blogDescription}</p>
      <Link href={`/blogs/${blogSlug}`}>
        <a className="text-[#eb3b3b] inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default Blog