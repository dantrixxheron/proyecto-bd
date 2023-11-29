export async function useDatabase(user: string, passwd: string, database: string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/use?user=${user}&passwd=${passwd}&database${database}`, {
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
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}