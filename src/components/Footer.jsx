import Logo from '../assets/bartlogo.svg'
const Footer = () => {
    return (
        <div className=" border-t border-gray-300 pt-12 dark:bg-darkBackground">
            <div className="container mx-auto p-4 ">
                
            <div className='flex flex-col md:flex-row flex-between pb-4'>
                <div className='pb-6'>
                <img src={Logo} alt="Logo" className="w-12 object-contain" />
                </div>

                <div className='md:ml-64 ml-12'>
                    <p className='text-4xl pb-6 dark:text-white'>
                    Connect With <br/><span className='text-blue-600 font-bold text-3xl md:text-6xl ml-24'>Me.</span>
                    </p>
                </div>   
                
            </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='pb-6 md:pb-0 dark:text-blue-500 text-xl'>
                        <p >bartplangedennis@gmail.com</p>
                    </div>
                    {/* menu items */}
                    <div className="flex flex-col">
                        <div className='flex flex-col md:flex-row md:space-x-12 md:pb-8 space-y-4 md:space-y-0'>
                    <a href="#work" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-orange-500">
                    Work
                    </a>
                    <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-orange-500">
                    About
                    </a>
                    <a href="#experience" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-orange-500 pb-4 lg:pb-0">
                    Experience
                    </a>
                        </div>

                        <div className='flex flex-col md:flex-row md:space-x-12 md:pb-8 space-y-4 md:space-y-0'>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-orange-500">
                    Contact
                    </a>
                    <a href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-orange-500 border-gray-600 cursor-pointer"
                    >
                    Resume
                    </a>
                        </div>
                    
                </div>
                </div>
                
                <div className='pt-12 dark:text-white'>
                    <p>@Bart-Plange Dennis, 2023</p>
                </div>
            </div>  
        </div>
    )
};

export default Footer;
