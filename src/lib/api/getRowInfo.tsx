export async function getRowInfo(user: string, passwd: string, database: string, table: string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/row/get?user=${user}&passwd=${passwd}&database=${database}&table=${table}`, {
            method: "GET"
        });
    
        if (res.ok) {
            const data = await res.json();
    
            return data.row;
        }
    
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}