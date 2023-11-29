export async function getDatabases(user: string, passwd: string) {
    try {
<<<<<<< HEAD
        const res = await fetch(`http://localhost:8080/api/databases/get?user=${user}&passwd=${passwd}`, {
            method: "GET",
=======
        const res = await fetch('http://localhost:8080/api/databases/get', {
            method: "GET"
>>>>>>> 5cd63018a7dbee3613971d05cc8c8b1556d1acc6
        });
    
        if (res.ok) {
            const data = await res.json();
            console.log(data);
            return data.databases;
        }
    
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}