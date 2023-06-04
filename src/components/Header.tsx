import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className='bg-blue-500 text-white p-4 mb-10'>
            <div className='container mx-auto flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>
                    <nav>
                        <ul className='flex space-x-4'>
                            <li>
                                <NavLink to='/' className = 'hover:underline'>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/books' className = 'hover:underline'>
                                    Books
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </h1>
            </div>
        </header>

    );
};

export default Header;