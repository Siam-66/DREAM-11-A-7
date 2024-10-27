import PropTypes from 'prop-types';
import { useState } from 'react';

const Header = ({ coins }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50">
            <div className="navbar bg-base-100 max-w-screen-2xl mt-4  mx-auto">
                <div className="flex-1">
                    <img src="/assets/logo.png" alt="Logo" className="w-[4rem]" />
                </div>
                <div className="flex-none">
                    
                    <button className="btn border-1 text-lg border-gray-200 lg:hidden mr-4">
                        {coins} Coin <span><img src="/assets/dollar.png" alt="Dollar icon" className="inline-block h-6 w-6" /></span>
                    </button>
                    
                    <button className="btn btn-square lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                
                <ul className="menu menu-horizontal text-xl gap-5 px-1 hidden lg:flex align-middle">

                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>

                    <button className="btn border-1 text-lg border-gray-200">
                        {coins} Coin <span><img src="/assets/dollar.png" alt="Dollar icon" className="inline-block h-6 w-6" /></span>
                    </button>
                </ul>
            </div>
            
            {isMenuOpen && (
                <div className="lg:hidden">
                    <ul className="menu flex flex-col text-xl gap-5 p-4 bg-base-100">
                    <li><a>Home</a></li>
                    <li><a>Fixture</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Schedules</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

Header.propTypes = {
    coins: PropTypes.number.isRequired,
};

export default Header;
