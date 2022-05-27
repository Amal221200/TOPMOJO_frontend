
const Main = ({ title, description }) => {

    return (
        <main className="container px-4 flex justify-center items-center flex-col mx-auto font-light">
            <h1 className={`text-center min-w-[20rem] sm:min-w-[40rem] lg:min-w-[60rem] text-5xl border-b-2 text-black border-black dark:text-white dark:border-white my-3`}>{title}</h1>
            <p className={`my-4 mx-2 text-xl p-4 text-black dark:text-white font-medium`}>{description}</p>
        </main>
    )
}

export default Main