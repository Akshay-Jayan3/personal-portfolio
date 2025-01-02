import React from 'react'
import Image from 'next/image';
import logo from '@/images/logo.svg';
import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" >
            <Image src={logo} width={100} alt='work' />
        </Link>
    )
}

export default Logo