export async function rawQuery(user : string, passwd : string, database : string, query : string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/rawQuery`, {
            method: "POST",
            body: JSON.stringify({
                user: user,
                passwd: passwd,
                database: database,
                query: query
            }),
            headers: {
                "Content-type": "application/json"
            }
        });
        
        if (res.ok) {
            const data = await res.json();
            return data.response;
        }
    
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}