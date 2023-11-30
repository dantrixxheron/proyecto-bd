export async function createRow(user: string, passwd: string, database: string, table: string, columns: any, row_content: any) {
    try {
        const res = await fetch(`http://localhost:8080/api/databases/row/create`, {
            method: "POST",
            body: JSON.stringify({
                user: user,
                passwd: passwd,
                database: database,
                table: table,
                columns: columns,
                row_content: row_content
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