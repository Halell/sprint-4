
export function ColorInput({ handleStyleChange }) {
    const colors = ['aqua', 'yellow', 'green', 'pink', 'red'];

    return <section className="input-container">
        <div className="items-container" >
            {colors.map(color => <div className="item" key={color}
                style={{ backgroundColor: color }}
                onClick={() => handleStyleChange(color)}>
            </div>)}
        </div>
    </section>
}