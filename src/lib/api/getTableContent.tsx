export async function getTableContent(user: string, passwd: string, database: string, table: string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/table/get?user=${user}&passwd=${passwd}&database=${database}&table=${table}`, {
            method: "GET"
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