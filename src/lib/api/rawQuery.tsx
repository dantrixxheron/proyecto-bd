export async function rawQuery(user : string, passwd : string, database : string, query : string) {
    try {
        console.log({
            user: user,
            passwd: passwd,
            database: database,
            query: query
        });
        const res = await fetch(`http://localhost:8080/api/databases/raw_query`, {
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
            console.log(data);
            return data.response;
        }
    
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}