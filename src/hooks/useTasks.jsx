// import { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
    // const [tasks, setTasks] = useState([]);
    // const [loading, setLoading] = useState(true);
    const { user } = useAuth()
    console.log(user.email);
    const axiosPublic = useAxiosPublic()
    // useEffect(() => {

    //     axiosPublic.get( `/tasks/${user?.email}`)
       
    //         .then(data => {
    //              console.log(user?.email);
    //             setTasks((data.data))
    //         })
    //     setLoading(false)
    // }, [axiosPublic , user])
    // // console.log(tasks);
    // return [tasks, loading]

    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user?.email}` )
            return res.data;
        }
    })
    // console.log(tasks);


    return [tasks, refetch]

};

export default useTasks;