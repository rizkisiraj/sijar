import Image from "next/image"

interface Screenshots {
    names: string[]
}

const Gallery = (props: Screenshots) => {
    return (
        <>
        <h2>App Demo and Screenshots</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                props.names.map(name => {
                    return (
                        <Image key={name} alt="good" src={name} className="w-full h-full rounded-sm" height={300} width={200} />
                    )
                })
            }
        </div>
        </>
    )
}

export default Gallery;