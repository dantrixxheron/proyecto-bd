export async function getTabletContent(user: string, passwd: string, database: string, table: string) {
    try {
        const res = await fetch('http://localhost:8080/api/databases/table/get', {
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