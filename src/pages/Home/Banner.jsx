/* eslint-disable react/no-unescaped-entities */
import Container from '../../components/Container';
import './banner.css'
const Banner = () => {
    return (
        <Container>
            <div className="banner  object-fill h-[500px] md:h-[400px] lg:h-[600px] ">
                <div className='scale-x-[-1]   bg-gradient-to-r from-black to-transparent opacity-90 md:opacity-80 h-full '>
                    <div className='pt-10 md:pt-16 lg:pt-20 pl-9 text-left '>
                        <h1 className='text-white text-2xl md:text-3xl lg:text-5xl font-bold '>Manage Your
                            <span className='text-cyan-600'> Tasks</span>
                        </h1>
                        <h3 className='text-white text-xl font-semibold my-2 md:my-4'>
                            Manage Your <span className='text-cyan-600'> Time</span>
                        </h3>
                        <p className='my-5 text-neutral-200 w-full md:w-[50%]'>Our mission to manege task in time and make corporate life more easy and make productive</p>

                        <button className='px-4 py-2 md:px-6 md:py-3 bg-cyan-600 hover:bg-cyan-800 text-white font-semibold rounded-lg'>
                        Let's Explore
                    </button>
                    </div>

                    
                </div>

            </div>
        </Container>
    );
};

export default Banner;