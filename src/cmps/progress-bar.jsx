export const ProgressBar = ({ group }) => {
    const progress = group.tasks.reduce((acc, task) => {
        if (acc[task.status]) acc[task.status] += 1
        else acc[task.status] = 1
        return acc
    }, {})

    const iterators = Object.keys(progress)
    console.log(progress)
    console.log(iterators)
    return <section className="progress-display flex ">

        <div className="progress-bar flex" >
            {iterators &&
                iterators.map((iterator, idx) => {
                    return <div key={idx} className="progress-indicator" style={{ backgroundColor: group.tasks[idx].style.status, width: (100 * (progress[iterator] / group.tasks.length) + '%') }} title={progress + ' ' + 100 * (progress[iterator] / group.tasks.length) + '%'}></div>
                })
            }
        </div>

    </section>
}