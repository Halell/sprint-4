

export function BoardPreview({ item }) {
    return (
        <div>
            <hr />
            {item && item.name}
            {item && item.status}
           
        </div>
    )
}