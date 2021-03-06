import React from 'react'
import Link from 'next/link'

const BlogHome = ({blogSlug, blogDate, blogTitle, blogDescription }) => {
  return (
    <div className="m-2 rounded-lg shadow-sm dark:shadow-gray-800 shadow-gray-500">
      <div className={`h-full bg-[#eee] rounded-lg dark:bg-stone-700 lg:px-10 lg:py-12 p-4 md:p-8 overflow-hidden text-center relative`}>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-neutral-500 mb-3">{blogTitle}</h1>
        <h3 className='my-2 text-gray-900 dark:text-neutral-500'>{blogDate}</h3>
        <p className="leading-relaxed text-left mb-3 md:text-base text-sm dark:text-white">{blogDescription.slice(0, 150)}</p>
        <Link href={`/posts/${blogSlug}`}>
          <a className="text-[#eb3b3b] inline-flex items-center">Read More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </Link>
        {/* <div className="text-center mt-4 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
          <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div> */}
      </div>
    </div>
  )
}

export default BlogHome