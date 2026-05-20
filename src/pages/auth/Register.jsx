import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';

import auth from '../../firebase/confige';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { toast } from 'sonner';

function Register() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        const validationPattern = /^(?=.*\d)(?=.*\W)[a-zA-Z].*$/;

        if (!email.trim() || !password.trim()) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        if (!validationPattern.test(password)) {
            toast.error('Password must start with a letter and contain at least one number and one special character.');
            return;
        }

        try {
            setLoading(true);

            const promise = createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            toast.promise(promise, {
                loading: 'Creating account...',
                success: 'Created successfully',
                error: 'Failed to create account',
            });

            await promise;

            setFormData({
                email: '',
                password: ''
            });

            navigate('/registerTwo');

        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthForm
            type='register'
            loading={loading}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
        />
    );
}

export default Register;