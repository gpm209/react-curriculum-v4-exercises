function SnackFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>© {currentYear} My Snack Ranking App</p>
    </footer>
  );
}

export default SnackFooter;
