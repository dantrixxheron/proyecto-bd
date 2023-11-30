export async function updateRow(user: string, passwd: string, database: string, table: string, columns: any, row_content: any, id_name: string, row_id: string) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/row/update`, {
            method: "PUT",
            body: JSON.stringify({
                user: user,
                passwd: passwd,
                database: database,
                table: table,
                columns: columns,
                row_content: row_content,
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