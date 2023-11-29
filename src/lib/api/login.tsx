export async function login(user: string, passwd: string) {
    try {
<<<<<<< HEAD
=======
        console.log(user, passwd);
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
        const res = await fetch('http://localhost:8080/api/user/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user, passwd: passwd})
        });

        if (res.ok) {
<<<<<<< HEAD
=======
            console.log("Entré");
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
            return {user: user, passwd: passwd};
        }

        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}