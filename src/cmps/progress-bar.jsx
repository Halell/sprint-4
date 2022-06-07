export const ProgressBar = ({ group, colIdx }) => {
    // const progress = group.progress
    const progress = group.tasks.reduce((acc, task) => {
        if (acc[task.status]) acc[task.status] += 1
        else acc[task.status] = 1
        return acc
    }, {})
    console.log('progress: ', progress);
    return <section className="progress-display flex ">
        <div className="progress-bar flex ">
            {progress && progress?.done && <div className="progress-indicator" style={{ backgroundColor: '#00C875', width: (100 * (progress.done / group.tasks.length) + '%') }} title={'Done: ' + 100 * (progress.done / group.tasks.length) + '%'}></div>}
            {progress && progress['working on it'] && <div className="progress-indicator" style={{ backgroundColor: '#FDAB3D', width: (100 * (progress['working on it'] / group.tasks.length) + '%') }} title={'In progress: ' + 100 * (progress['working on it'] / group.tasks.length) + '%'}></div>}
            {progress && progress?.stuck && <div className="progress-indicator" style={{ backgroundColor: '#E2445C', width: (100 * (progress.stuck / group.tasks.length) + '%') }} title={'Stuck' + 100 * (progress.stuck / group.tasks.length) + '%'}></div>}
            {/* {progress && progress?.none && <div className="progress-indicator" style={{ backgroundColor: '#c4c4c4', width: (100 * (progress.stuck / group.tasks.length) + '%') }} title={'Stuck' + 100 * (progress.stuck / group.tasks.length) + '%'}></div>} */}
        </div>
    </section>
}