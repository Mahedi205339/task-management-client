import Container from "../../components/Container";
import student from '../../assets/images 11.jpeg'
import meeting from '../../assets/image9.jpg'
import banker from '../../assets/images 11.jpeg'
import assign from '../../assets/images 10.jpeg'


const Users = () => {
    return (
        <div>
            <Container>
                <div>
                    <h2 className="text-2xl font-bold text-center md:text-3xl
                     lg:text-5xl my-6 md:my-10 lg:mt-20">Top <span className="text-cyan-600  ">Client</span></h2>
                    <div>
                        <div className="flex flex-col md:flex-row items-center my-8 md:my-12 lg:my-20">
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1">
                                <img src={student} alt="" />
                            </div>
                            <div  data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1 p-4 lg:p-0">
                                <h2 className="text-center md:text-left text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    Students
                                </h2>
                                <p className="max-w-[500px]">
                                    Students can use the task management website to organize their assignments, projects, and study schedules. The platform can help them prioritize tasks, set deadlines, and maintain a clear overview of their academic responsibilities. Additionally, collaboration features may facilitate group projects and discussions.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center my-8 md:my-12 lg:my-20">
                            <div  data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1">
                                <img className="w-72" src={meeting} alt="" />
                            </div>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1 p-4 lg:p-0">
                                <h2 className="text-center md:text-left text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    Businessman
                                </h2>
                                <p className="max-w-[500px]">
                                    Businessmen can use the task management website to oversee and manage various aspects of their business activities. This may include setting goals, tracking sales and marketing initiatives, managing appointments and meetings, and coordinating with their team. The platform can provide a comprehensive view of business tasks and priorities, aiding in strategic decision-making.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center my-8 md:my-12 lg:my-20">
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1">
                                <img src={assign} alt="" />
                            </div>
                            <div  data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1 p-4 lg:p-0">
                                <h2 className="text-center md:text-left text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    Corporate Professionals
                                </h2>
                                <p className="max-w-[500px]">
                                    Corporate professionals can leverage the task management website to streamline their work tasks, track project progress, and coordinate with team members. Features like shared calendars, document sharing, and progress tracking can enhance team collaboration, leading to increased productivity and efficient project management.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row-reverse items-center my-8 md:my-12 lg:my-20">
                            <div  data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1">
                                <img src={banker} alt="" />
                            </div>
                            <div data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine" className="flex-1 p-4 lg:p-0">
                                <h2 className="text-center md:text-left text-xl md:text-3xl lg:text-4xl font-bold mb-4">
                                    Banker
                                </h2>
                                <p className="max-w-[500px]">
                                    Bankers can benefit from the task management website to manage a variety of responsibilities, such as client meetings, financial analysis, and regulatory compliance tasks. The platform can help them stay organized, meet deadlines for reports, and collaborate with colleagues on important projects or deals.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Users;