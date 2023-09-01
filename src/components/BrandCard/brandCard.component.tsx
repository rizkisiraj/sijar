import { ReactElement } from "react";

interface Brand {
    icon: ReactElement
    name: string
    link: string
}

const BrandCard = (brand: Brand) => {
    return (
        <a className={`inline-flex gap-1 text-sm items-center py-[1px] px-1 border border-gray-500 rounded-md bg-gray-600 ${brand.name === "Flutter" ? "text-red-300" : (brand.name === "SwiftUI" ? "text-blue-300" : "text-green-300")}`} href={brand.link}>{brand.icon} {brand.name}</a>
    )
}

export default BrandCard