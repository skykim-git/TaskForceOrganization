import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AddTaskForm } from './components/AddTaskForm';
import { Task } from './components/Task';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const task = {
  id: 1,
  title: "Task 1",
  completed: false,
}

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AddTaskForm />
      <Task task={task}/>
    </ThemeProvider>
  );
}