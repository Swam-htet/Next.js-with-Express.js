import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white text-center text-lg-start">
            {/* Grid container */}
            <div className="container p-4">
                {/*Grid row*/}
                <div className="row">
                    {/*Grid column*/}
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque
                            ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae
                            repudiandae aliquam voluptatem veniam, est atque cumque eum delectus
                            sint!
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link href="#" className="text-white">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">
                                    Link 2
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">
                                    Link 3
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">
                                    Link 4
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column*/}
                    {/*Grid column*/}
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-0">Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="#" className="text-white">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">
                                    Link 2
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">
                                    Link 3
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-white">
                                    Link 4
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
                className="text-center p-3"
                style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
            >
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                    MDBootstrap.com
                </a>
            </div>
            {/* Copyright */}
        </footer>
    )
}