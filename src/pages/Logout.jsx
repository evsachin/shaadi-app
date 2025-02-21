import { useAuth } from "../context/authContext";

const Logout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex flex-col items-center p-6">
      {user ? (
        <>
          <p className="mb-2">Welcome, {user.email}</p>
          <button
            onClick={logout}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <p>You are not logged in.</p>
      )}
    </div>
  );
};

export default Logout;
