export async function login(user: string, passwd: string) {
    try {
        console.log(user, passwd);
        const res = await fetch('http://localhost:8080/api/user/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user, passwd: passwd})
        });

        if (res.ok) {
            console.log("Entré");
            return {user: user, passwd: passwd};
        }

        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}