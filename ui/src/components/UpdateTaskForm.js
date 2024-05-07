import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, TextField } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { API_URL } from '../utils';

export const UpdateTaskForm = ({ fetchTasks, isDialogOpen, setIsDialogOpen, task }) => {
    const {id, completed} = task;
    const {taskName, setTaskName} = useState("");

    const handleUpdateTask = async () => {
        try {
            await axios.put(API_URL, {
                id,
                nameTask: taskName,
                completed,
            });

            await fetchTasks();
            setTaskName("");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <Dialog open={isDialogOpen}>
            <DialogTitle>Edit Task</DialogTitle>
            <div className="dialog">
                <TextField 
                    size="small" 
                    label="Task" 
                    variant="outlined" 
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <Button 
                    variant="contained" 
                    onClick={async () => {
                        await handleUpdateTask();

                        setIsDialogOpen(false);
                    }}>
                        <CheckIcon/>
                    </Button>
            </div>
        </Dialog>
    );
};
