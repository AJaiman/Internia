'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from "next-auth/react";

const Dashboard = () => {
    const [message, setMessage] = useState('');
    const router = useRouter();
    const { data: session } = useSession();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token && session === null) {
            router.push('/loginPage'); // Redirect to login if token is missing
        }
        
        if (token) {
            fetchProtectedData(token);
        }

    }, [router]);

    const fetchProtectedData = async (token) => {
        try {
            const response = await fetch('http://127.0.0.1:8000/protected-route', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(`Welcome, ${data.name}! This is a protected route.`);
            } else {
                console.log('Failed to fetch protected data');
                handleLogout(token);
            }
        } catch (error) {
            console.log('Error during fetch:', error);
            handleLogout(token);
        }
    };

    const handleLogout = async () => {
        await signOut()
        localStorage.removeItem('token');
        router.push('/loginPage'); // Redirect to login page
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{message}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Dashboard;
