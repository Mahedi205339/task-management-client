import about from '../../assets/about.png'
import Container from '../../components/Container';

const About = () => {
    return (
        <Container>
            <div>
                <h2 className="text-2xl font-bold text-center md:text-3xl
                     lg:text-5xl my-6 md:my-10 lg:mt-20">About <span className="text-cyan-600  ">US</span>
                </h2>
                <div className='flex flex-col md:flex-row justify-evenly items-center my-6 md:my-10'>
                    <div>
                        <img className='max-w-[400px] p-10 md:p-2' src={about} alt="" />
                    </div>
                    <div>
                        <p className='max-w-[500px] p-5 md:p-2'>
                            
                            Welcome to our task management platform, where efficiency meets simplicity. At our core, we understand the challenges individuals and teams face in managing tasks, deadlines, and projects seamlessly. With a passion for productivity and organization, we embarked on a journey to create a user-friendly, feature-rich task management solution that caters to the diverse needs of students, professionals, and businesses alike. Our platform is designed to empower users with intuitive tools for task prioritization, collaboration, and progress tracking. Whether you are a student keeping track of assignments or a corporate professional coordinating complex projects, our task management website is here to elevate your productivity and help you achieve your goals.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-evenly items-center my-6 md:my-10'>
                    <div>
                        <h1 className='text-2xl font-semibold  md:text-3xl
                     lg:text-5xl'>Our <span className='text-cyan-600'>Mission</span></h1>
                    </div>
                    <div>
                        <p className='max-w-[500px] p-5 md:p-2'>
                            
                            Welcome to our task management platform, where efficiency meets simplicity. At our core, we understand the challenges individuals and teams face in managing tasks, deadlines, and projects seamlessly. With a passion for productivity and organization, we embarked on a journey to create a user-friendly, feature-rich task management solution that caters to the diverse needs of students, professionals, and businesses alike. Our platform is designed to empower users with intuitive tools for task prioritization, collaboration, and progress tracking. Whether you are a student keeping track of assignments or a corporate professional coordinating complex projects, our task management website is here to elevate your productivity and help you achieve your goals.
                        </p>
                    </div>
                </div>
            </div>

        </Container>
    );
};

export default About;