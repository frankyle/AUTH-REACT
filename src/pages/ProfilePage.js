import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token'); // Get the token from local storage

      if (!token) {
        navigate('/login'); // Redirect to login if not authenticated
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profile/', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setProfile(response.data);
      } catch (err) {
        if (err.response && err.response.data) {
          setError(err.response.data.detail || 'Failed to load profile');
        } else {
          setError('An error occurred: ' + err.message);
        }
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{profile.user.email}'s Profile</h2>
      <img src={profile.image} alt="Profile" style={{ width: '150px', height: '150px' }} />
      <div>
        <p><strong>Phone Number:</strong> {profile.phone_number || 'N/A'}</p>
        <p><strong>Nationality:</strong> {profile.nationality || 'N/A'}</p>
        <p><strong>Region:</strong> {profile.region || 'N/A'}</p>
        <p><strong>Age:</strong> {profile.age || 'N/A'}</p>
        <p><strong>Informed By:</strong> {profile.informed_by || 'N/A'}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
