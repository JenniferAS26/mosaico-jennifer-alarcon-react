import { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaRegCircle, FaRegCheckCircle, FaEdit, FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { createTask, deleteTask, fetchTasks, updateTask } from '../../services/taskService'
import { Modal } from 'antd'
import Swal from 'sweetalert2'
import './styles.sass'

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [open, setOpen] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [selectTaskId, setSelectTaskId] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async ( newTask ) => {
    const taskData = {
      ...newTask,
      done: false
    }
    await createTask(taskData)
    await Swal.fire({
      title: 'New task created successfully',
      confirmButtonText: 'Ok',
      reverseButtons: true,
      'customClass': {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    getTaskFromAPI()
    handleCancel()
    reset()
  }

  /** Modal controller */
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setOpen(false)
  }
  const handleCancel = () => {
    setOpen(false)
  }

  const showEditModal = ( taskId ) => {
    setSelectTaskId(taskId)
    setOpenEditModal(true)
  }

  const handleEditOk = () => {
    setOpenEditModal(false)
  }
  const handleEditCancel = () => {
    setOpenEditModal(false)
  }

  const deleteTaskFromList = async ( id ) => {
    const messageConfirmDeletion = await Swal.fire({
      title: 'Are you sure that you want to delete this task?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
      'customClass': {
          button: 'custom-button',
          htmlContainer: 'custom-container'
      },
    })
    if (messageConfirmDeletion.isConfirmed) {
      await deleteTask(id)
      getTaskFromAPI()
    }
  }

  const handleEditTask = async () => {
    console.log(inputValue)
    await updateTask(selectTaskId, { description: inputValue })
    getTaskFromAPI()
    handleEditCancel()
    reset()
  }

  const toggleTaskStatus = async ( status ) => {
    await updateTask(selectTaskId, { done: !status })
    getTaskFromAPI()
  }

  const getTaskFromAPI = useCallback(() => {
    fetchTasks()
      .then(response => setTasks(response))
  }, [])

  useEffect(() => {
    getTaskFromAPI()
  }, [getTaskFromAPI])

  return (<>
    <main className='todo-list'>
      {
        tasks.map((task) => (
          <article key={task.id} className='todo-list__card'>
            <div className='todo-list__card--top'>
              <span 
                className='indicator'
                onClick={() => {
                  setSelectTaskId(task.id)
                  toggleTaskStatus(task.done)
                }}
              >
                {
                  task.done ? <FaRegCheckCircle /> : <FaRegCircle />
                }
              </span>
              <span className='category'>{task.category}</span>
            </div>
            <p className='todo-list__card--description'>{task.description}</p>
            <div className='todo-list__card--button-wrapper'>
              <button 
                className='action-button'
                onClick={() => showEditModal(task.id)}
              >
                <FaEdit />
              </button>
              <button 
                className='action-button'
                onClick={() => deleteTaskFromList(task.id)}
              >
                <MdDelete />
              </button>
            </div>
          </article>
        ))
      }
      <button 
        className='add-task'
        onClick={showModal}
      >
        <FaPlus />
      </button>
    </main>
    <Modal
      open={open}
      title='Add a new task'
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <form 
        className='new-task-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='top-container'>
          <div className='radio-wrapper'>
            <label 
              htmlFor='input-work'
              className='label-radio'
            >
              work
            </label>
            <input
              type='radio'
              name='category'
              value='work'
              id='input-work'
              className='input-radio'
              { ...register('category') }
              checked
            />
          </div>
          <div className='radio-wrapper'>
            <label 
              htmlFor='input-personal'
              className='label-radio'
            >
              personal
            </label>
            <input
              type='radio'
              name='category'
              value='personal'
              id='input-personal'
              className='input-radio'
              { ...register('category') }
            />
          </div>
          <div className='radio-wrapper'>
            <label 
              htmlFor='input-hobby'
              className='label-radio'
            >
              hobby
            </label>
            <input
              type='radio'
              name='category'
              value='hobby'
              id='input-hobby'
              className='input-radio'
              { ...register('category') }
            />
          </div>
        </div>
        <input 
          className='input' 
          type='text' 
          name='description' 
          placeholder='Write a new task' 
          { ...register('description') }
        />
        <button 
          className='new-task-form__button' 
          type='submit'
        >
          Add task
        </button>
      </form>
    </Modal>
    <Modal
      open={openEditModal}
      title='Edit task'
      onOk={handleEditOk}
      onCancel={handleEditCancel}
      footer={null}
    >
      <form  
        className='edit-task'
      >
        <input 
          type='text' 
          placeholder='Edit task'
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button 
          type='button'
          onClick={handleEditTask}
        >
          Edit
        </button>
      </form>
    </Modal>
  </>)
}

export default TodoList
