function SnackList() {
  const mySnacks = [
    { name: 'Cheese cake', rank: 5 },
    { name: 'Chocolate', rank: 4 },
    { name: 'Peanuts', rank: 3 },
    { name: 'Apple pie', rank: 2 },
    { name: 'Fruit salad', rank: 1 },
  ];

  const favoriteSnacks = mySnacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {favoriteSnacks.map((snack) => (
        <li key={snack.name}>{snack.name}</li>
      ))}
    </ol>
  );
}
export default SnackList;
