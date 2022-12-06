import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function Header(){
    const [isScrolled, setIsScrolled] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleScroll = () => {
        if (window.scrollY > 0) {
           
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
           
        }
    }
   
    return ( 
         <header className={`${isScrolled && 'bg-red-500'}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
            />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">Tv</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">Mew</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className='flex items-center space-x-4 text-sm'>
                <SearchOutlined/>
                <p className="hidden lg:inlene">Kids</p>
                <BellOutlined/>
                <Link href="/account">
                    <img src="https://rb.gy/g1pwyx"
                        alt=""
                        className="cursor-pointer rounded"
                    />
                </Link>
            </div>
        </header>
        )
    
}

export default Header