import './footer.css';
import Logo from '../../assets/bartlogo.svg'
const Footer = () => {
    return (
        <div className="relative bg-blue-950 border-t border-gray-300 pt-12 dark:bg-gray-800">
            <div className="footer container mx-auto p-4 ">
                
            <div className='flex flex-col md:flex-row flex-between pb-4'>
                <div className='pb-6'>
                <img src={Logo} alt="Logo" className="w-16 object-contain" />
                </div>

                <div className='md:ml-64 ml-12'>
                    <p className='text-4xl pb-6 dark:text-white text-gray-500'>
                    Connect With <br/><span className='text-orange-500 font-bold text-3xl md:text-6xl ml-24'>Me.</span>
                    </p>
                </div>   
                
            </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-green-100 pb-6 md:pb-0 dark:text-blue-500 text-xl'>
                        <p >bartplangedennis@gmail.com</p>
                    </div>
                    {/* menu items */}
                    <div className="flex flex-col">
                        <div className='flex flex-col md:flex-row md:space-x-12 md:pb-8 space-y-4 md:space-y-0'>
                    <a href="#work" className="text-gray-200  text-lg dark:text-gray-200 hover:text-orange-500">
                    Work
                    </a>
                    <a href="#about" className="text-gray-200 text-lg  dark:text-gray-200 hover:text-orange-500">
                    About
                    </a>
                    <a href="#experience" className="text-gray-200 text-lg  dark:text-gray-200 hover:text-orange-500 pb-4 lg:pb-0">
                    Experience
                    </a>
                        </div>

                    <div className='flex flex-col md:flex-row md:space-x-12 md:pb-8 space-y-4 md:space-y-0'>
                    <a href="/contact" className="text-gray-200 text-lg dark:text-gray-200 hover:text-orange-500">
                    Contact
                    </a>
                    <a href="./Dennis-resume-light.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 text-lg dark:text-gray-200 hover:text-orange-500 border-gray-600 cursor-pointer"
                    >
                    Resume
                    </a>
                        </div>
                    
                </div>
                </div>
                
                <div className='pt-12 text-white '>
                    <p>@Bart-Plange Dennis, 2023</p>
                </div>
            </div>  
        </div>
    )
};

export default Footer;
