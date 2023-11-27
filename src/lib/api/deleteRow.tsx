export async function deleteRow(user: string, passwd: string, database: string, table: string, row: string) {
    try {
        const res = await fetch('http://localhost:8080/api/databases/row/delete', {
            method: "DELETE"
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