import Button from "@/components/Button"

function tutorial() {
    return (
        <section className="w-full flex flex-col items-center justify-center">
            <h1 className="font-sans text-xl text-white bg-violet-200  3xl:bg-red-400 3xl:text-color-primary my-4"> Welcome to my Tutorial Page</h1>
            <Button className="p-2" label="Click Me" />
        </section>
    )
}
export default tutorial