export async function getDatabases(user: string, passwd: string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/get?user=${user}&passwd=${passwd}`, {
            method: "GET",
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