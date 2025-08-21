const useUser = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        setError(null);

        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' ||
                            document.cookie.includes('loggedIn=true');

        if (!isLoggedIn) throw new Error('User not logged in');

        const userId = localStorage.getItem('userId') || localStorage.getItem('userEmail');
        if (!userId) throw new Error('No user identifier found');

        // Fetch only Full_Name and Gmail from backend API
        const response = await fetch(`/api/users/${userId}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        });

        if (!response.ok) throw new Error('Failed to fetch user data');

        const user = await response.json();

        // Map database columns to your UI
        setUserData({
          name: user.Full_Name || 'User',
          email: user.Gmail || ''
        });

      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  return { userData, loading, error };
};
