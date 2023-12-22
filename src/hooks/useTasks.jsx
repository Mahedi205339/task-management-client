import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth()
    console.log(user.email);
    const axiosPublic = useAxiosPublic()
    useEffect(() => {

        axiosPublic.get( `/tasks/${user?.email}`)
       
            .then(data => {
                 console.log(user?.email);
                setTasks((data.data))
            })
        setLoading(false)
    }, [axiosPublic , user])
    // console.log(tasks);
    return [tasks, loading]

};

export default useTasks;