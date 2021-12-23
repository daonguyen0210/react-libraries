import React, { useState} from 'react'

const Addtask = (props) => {


  const {onSubmit} = props
  
  // const state
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState()

  const handleSubmit = (e) => { 
    // The preventDefault() method is used to stop any element form behaving its default behaviour
    e.preventDefault();
    
    if( !text){
      alert("Please add a task");
      return;
    }
    onSubmit({text, day, reminder});
    setText('');
    setDay('');
    setReminder(false);
  }

  return (
    <div>
      <form className="add-form" onSubmit={ (e) => handleSubmit(e)}>
        <div className="form-control">
          <label htmlFor="task">Task </label>
          <input type="text" id="task" placeholder="Add Task" value={text} onChange={(e) => { setText(e.target.value)}}/>
        </div>
        <div className="form-control">
          <label htmlFor="day_time">Day & Time </label>
          <input type="text" id="day_time" placeholder="Add Day & Time" value={day} onChange={(e) => { setDay(e.target.value)}} />
        </div>
        <div className="form-control form-control-check" > 
          <label htmlFor="reminder">Set Reminder </label>
          <input type="checkbox" id="reminder" checked={reminder} value={reminder}  onChange={ (e) => { 
            setReminder( e.currentTarget.checked)}} />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  )
}

export default Addtask
