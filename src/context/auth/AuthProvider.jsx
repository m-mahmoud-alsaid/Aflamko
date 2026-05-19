import { useState, useEffect } from 'react';

import { toast } from 'sonner';

import AuthContext from './AuthContext';
import auth from '../../firebase/confige';
import { onAuthStateChanged, signOut } from "firebase/auth";

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (!currentUser) {
                setUser(null);
                setLoading(false);
                return;
            }

            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        if (!user) {
            toast('You are already logged out.');
            return;
        }

        try {
            await signOut(auth);
            toast.success('Logged out successfully.');
        }
        catch {
            toast.error('Failed to logout.');
        }
    };

    if (loading) {
        return (
            <div className='min-h-screen min-w-screen flex justify-center items-center text-primary-text font-bold text-2xl'>
                Application Loading...
            </div>
        )
    }

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;