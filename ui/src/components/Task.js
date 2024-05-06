import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { UpdateTaskForm } from './UpdateTaskForm';
import classnames from "classnames";

export const Task = ({ task }) => {
    const {id, title, completed} = task
    const [isCompleted, setIsComplete] = useState(completed);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleUpdateTaskCompletion = () => {
        setIsComplete((prev) => !prev);
    }

    const handleDeleteTask = () => {
        console.log("Task deleted");
    }

  return (
    <div className="task">
        <div className={classnames("flex", {
            done: isCompleted
        })}>

        </div>
        <div>
            <Checkbox checked={isCompleted} onChange={handleUpdateTaskCompletion}/>
            <Typography variant="contained">{title}</Typography>
        </div>
        <div className="taskButtons">   
            <Button variant="contained" onClick={() => setIsDialogOpen(true)}>
                <EditIcon/>
            </Button>
            <Button color="error" variant="contained" onClick={handleDeleteTask}>
                <DeleteIcon/>
            </Button>
        </div>
        <UpdateTaskForm
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setIsDialogOpen}
            task={task}
        />
    </div>
  )
}
