import { Link } from "react-router-dom";
import Container from "../../components/Container";

const Dashboard = () => {
    return (
        <Container>
            <div className="">
                <div className="flex justify-end">
                   <Link to='/add-task'> <button>Add Task</button></Link>
                </div>
            </div>

        </Container>
    );
};

export default Dashboard;