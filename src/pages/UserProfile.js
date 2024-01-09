import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function UserProfile() {
    const [user, setUser] = useState({});
    const params = useParams();
    const userId = params.id;

    useEffect(() => {
        fetch(`http://localhost:4000/users?id=${userId}`)
            .then(r => r.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));
    }, [userId]);

    if (!user[0]) {
        return <h1>Loading...</h1>;
    };

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <h1>{user[0].name}</h1>
            </main>
        </>
    );
};

export default UserProfile;