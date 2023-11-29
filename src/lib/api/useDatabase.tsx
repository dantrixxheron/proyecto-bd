export async function useDatabase(user: string, passwd: string, database: string) {
    try {
<<<<<<< HEAD
        const res = await fetch(`http://localhost:8080/api/databases/use?user=${user}&passwd=${passwd}&database${database}`, {
=======
        const res = await fetch('http://localhost:8080/api/databases/use', {
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: user,
                passwd: passwd,
                database: database,
            })
        });

        if (res.ok) {
            const data = await res.json();
            return data;
        }
<<<<<<< HEAD
=======

>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}