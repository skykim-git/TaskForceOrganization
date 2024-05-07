import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { UpdateTaskForm } from './UpdateTaskForm';
import classnames from "classnames";
import axios from 'axios';
import { API_URL } from './utils';


export const Task = ({ task, fetchTasks }) => {
    const { id, nameTask, completed } = task;
    const [isComplete, setIsComplete] = useState(completed);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    const handleUpdateTaskCompletion = async () => {
      try {
        await axios.put(API_URL, {
          id,
          nameTask,
          completed: !isComplete,
        });
        setIsComplete((prev) => !prev);
      } catch (err) {
        console.log(err);
      }
    };
  
    const handleDeleteTask = async () => {
      try {
        await axios.delete(`${API_URL}/${task.id}`);
  
        await fetchTasks();
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <div className="task">
        <div
          className={classnames("flex", {
            done: isComplete,
          })}
        >
          <Checkbox checked={isComplete} onChange={handleUpdateTaskCompletion} />
          <Typography variant="h4">{nameTask}</Typography>
        </div>
        <div className="taskButtons">
          <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
            <EditIcon />
          </Button>
          <Button color="error" variant="contained" onClick={handleDeleteTask}>
            <DeleteIcon />
          </Button>
        </div>
        <UpdateTaskForm
          fetchTasks={fetchTasks}
          isDialogOpen={isDialogOpen}
          setIsDialogOpen={setIsDialogOpen}
          task={task}
        />
      </div>
    );
  };