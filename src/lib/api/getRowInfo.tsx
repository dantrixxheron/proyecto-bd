export async function getRowInfo(user: string, passwd: string, database: string, table: string, id_name: string, row_id: string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/row/get?user=${user}&passwd=${passwd}&database=${database}&table=${table}&id_name=${id_name}&row_id=${row_id}`, {
            method: "GET"
        });
    
        if (res.ok) {
            const data = await res.json();
    
            return data.row[0];
        }
    
        return null;
    } catch (e: any) {
        throw new Error(e);
    }
}