import Image from "next/image"

const CTACard = () => {
    return (
        <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
            <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/95 via-white/70 to-white/30" />
            {/* Image */}
            <Image
                fill
                alt="CTA Card Image"
                className="object-cover object-center"
                src="https://images.unsplash.com/photo-1672600830594-ae4ccc159578?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1263&q=80"
            />
            {/* Content Container */}
            <div className="relative z-20">
                <div className="text-lg font-medium">#explorertheworld</div>
                <h3 className="mt-3 text-4xl font-semibold">Explorer the world with me</h3>
                <p className="max-w-lg mt-2 text-lg">
                    Explorer the world
                </p>
            </div>
        </div>
    )
}

export default CTACard