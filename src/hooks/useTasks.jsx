import { useEffect, useState } from 'react';

const useTasks = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                setTasks(data);
                setLoading(false);
            });
    }, [])
        // console.log(tasks);
    return [tasks ,loading]

};

export default useTasks;