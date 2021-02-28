import Table from "./Table"

type BuildProps = {
    items: any
}

export default function Builder({items} : BuildProps) {
    return (
        <div className="container mx-auto shadow-md rounded-lg">
                <Table items={items} />
        </div>
    );
}