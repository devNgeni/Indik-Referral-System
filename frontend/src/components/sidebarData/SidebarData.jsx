import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'SignUp',
        path: '/signup',
        icon: <FaIcons.FaAddressBook />,
        cName: 'nav-text'
    },
    {
        title: 'Login',
        path: '/login',
        icon: <FaIcons.FaArrowAltCircleRight />,
        cName: 'nav-text'
    },
    {
        title: 'Terms & Conditions',
        path: '/terms',
        icon: <AiIcons.AiFillBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Privacy Policy',
        path: '/terms',
        icon: <AiIcons.AiFillBank />,
        cName: 'nav-text'
    },
    {
        title: 'Contact Us',
        path: '/contact',
        icon: <IoIcons.IoIosPhonePortrait />,
        cName: 'nav-text'
    }
];