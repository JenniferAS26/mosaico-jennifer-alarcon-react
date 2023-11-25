import axios from 'axios'
import endpoints from './endpoints'

const fetchTasks = async () => {
  try {
    const { data } = await axios.get(endpoints.tasks)
    return data
  } catch (error) {
    console.warn(error)
  }
}

const fetchTaskByParams = async ( params ) => {
  try {
    const { data } = await axios.get(endpoints.tasks, {  params: params})
    return data
  } catch (error) {
    console.warn(error)
  }
}

const createTask = async ( body ) => {
  try {
    await axios.post(endpoints.tasks, body)
  } catch (error) {
    console.warn(error)
  }
}

const updateTask = async ( id, body ) => {
  try {
    await axios.patch(`${endpoints.tasks}/${id}`, body)
  } catch (error) {
    console.warn(error)
  }
}

const deleteTask = async ( id ) => {
  try {
    await axios.delete(`${endpoints.tasks}/${id}`)
  } catch (error) {
    console.warn(error)
  }
}

export { fetchTasks, fetchTaskByParams, createTask, updateTask, deleteTask }