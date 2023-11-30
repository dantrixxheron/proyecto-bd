export async function deleteRow(user: string, passwd: string, database: string, table: string, id_name:string, row_id: string) {
    try {
        console.log(user, passwd, database, table, id_name, row_id);
        const res = await fetch(`http://localhost:8080/api/databases/row/delete`, {
            method: "POST",
            body: JSON.stringify({
                user: user,
                passwd: passwd,
                database: database,
                table: table,
                id_name: id_name,
                row_id: row_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });    
        if (res.ok) {
            const data = await res.json();
    
            return data.table;
        }
    
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}