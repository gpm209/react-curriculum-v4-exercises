import { useEffect, useState } from 'react';

import UserProfile from './components/UserProfile';
import TaskFilter from './components/TaskFilter';
import TaskItem from './components/TaskItem';
import { filterTask } from './utils/filterTask';

import useFetchingTask from './hooks/useFetchingTask';

export default function StudentWork() {
  const [filter, setFilter] = useState('all');

  //  #1: Data fetching + state + UI logic separated now.
  const { tasks, loading } = useFetchingTask();

  // #2: Filtering logic inside component fixed
  let visibleTasks = filterTask(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      {/* #3: Hardcoded UI fixed, now reusable */}
      <UserProfile name="Student" />

      {/* #4: filtered buttons replaced */}
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

      {/* #5: Inline list rendering fixed*/}
      <ul>
        {visibleTasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}
