import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './components/AuthForm';

import auth from '../../firebase/confige';
import { updateProfile } from "firebase/auth";

import { toast } from 'sonner';

function RegisterStepTwo() {

    const [formData, setFormData] = useState({
        name: '',
        photo: ''
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, photo } = formData;

        if (!name.trim() || !photo.trim()) {
            toast.error('Please fill in all fields.');
            return;
        }

        if (!auth.currentUser) {
            navigate('/register');
            return;
        }

        try {
            setLoading(true);

            await toast.promise(
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: photo
                }),
                {
                    loading: 'Wait...',
                    success: 'Completed Registration successfully',
                    error: 'Failed to create account',
                }
            );

            setFormData({
                name: '',
                photo: ''
            });

            navigate('/home');

        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthForm
            type='registerStepTwo'
            loading={loading}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
        />
    );
}

export default RegisterStepTwo;