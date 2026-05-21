import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';
import auth from '../../firebase/confige';
import { signInWithEmailAndPassword } from "firebase/auth";

import { toast } from 'sonner';

function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        if (!email.trim() || !password.trim()) {
            toast.error('Please fill in all fields.');
            return;
        }

        try {
            setLoading(true);

            const promise = signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            toast.promise(promise, {
                loading: 'Logging...',
                success: 'Logged in successfully',
                error: 'Failed to logged in',
            });

            await promise;

            setFormData({
                email: '',
                password: ''
            });

            navigate('/home');

        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthForm
            type='login'
            loading={loading}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
        />
    );
}

export default Login;