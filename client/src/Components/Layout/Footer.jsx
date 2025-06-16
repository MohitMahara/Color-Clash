export const Footer = ( )   => {
    return(
        <footer className="w-full bg-gray-100 text-black py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© {new Date().getFullYear()} Color Clash. All rights reserved.</p>
            </div>
        </footer>
    )
}