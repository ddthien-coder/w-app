'use client'
import Link from "next/link"
import PaddingContainer from "../layout/padding-container"
import dynamic from "next/dynamic";


const navigation = () => {
  return (
    <div className="sticky top-0 z-[999] left-0 right-0 bg-white border-b bg-opacity-70 backdrop-blur-md">
        <PaddingContainer>
            <div className="flex items-center justify-between py-5">
                <Link className="text-lg font-bold" href="/">LOGO</Link>
                    {/* Category Link */}
                    <nav>
                        <ul className="flex items-center gap-4 text-neutral-600">
                            <li>
                                <Link href="cities">Cities</Link>
                            </li>
                            <li>
                                <Link href="experiences">Experiences</Link>
                            </li>
                        </ul>
                        
                    </nav>
            </div>
        </PaddingContainer>
    </div>
    
  )
}
export default dynamic (() => Promise.resolve(navigation), {ssr: true})