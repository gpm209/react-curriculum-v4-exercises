//Filter buttons refactored
export default function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange('all')}>All</button>
      <button onClick={() => onFilterChange('completed')}>Completed</button>
      <button onClick={() => onFilterChange('pending')}>Pending</button>
      <p>Current filter: {currentFilter}</p>
    </div>
  );
}
