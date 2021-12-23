import Task from './Task'

const Tasks = (props) => {

  const {tasks, onDelete, onToggle} = props

  return (
    <div >
      {tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>)}
    </div>
  )
}


export default Tasks
