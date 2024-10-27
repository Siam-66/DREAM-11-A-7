const Footer = () => {
    return (
        <footer>
            <div className="flex justify-center bg-[#06091A] pt-60 pb-10">
                <img src="/assets/logo-footer.png" alt="Footer Logo" />
            </div>
            <div className="footer bg-[#06091A] text-white p-5 lg:p-10 justify-around">
                <nav className="w-80 text-gray-400">
                    <h6 className="text-xl text-white font-bold">About Us</h6>
                    <p>We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav className="text-gray-400">
                    <h6 className="text-xl text-white font-bold">Quick Links</h6>
                    <li className="link link-hover">Home</li>
                    <li className="link link-hover">Services</li>
                    <li className="link link-hover">About</li>
                    <li className="link link-hover">Contact</li>
                </nav>
                <form>
                    <h6 className="text-xl font-bold">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <p className="label-text mb-5 text-gray-400 w-60">
                            Subscribe to our newsletter for the latest updates.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="input text-black join-item"
                            />
                            <button className="btn text-xl join-item text-black bg-gradient-to-r from-yellow-300 to-pink-400">
                                Subscribe
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>

            <hr className="border-gray-600" />
            <div className="bg-[#06091A] text-gray-400 text-center py-10">
                <p>@2024 Your Company All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
