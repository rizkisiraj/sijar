
function formatDateWithAgo(date: Date) {
  if (!date) {
    return "Invalid date";
  }

  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const currentDate = new Date();
  const targetDate: Date = new Date(date);

  let yearDiff = currentDate.getFullYear() - targetDate.getFullYear();
  let monthDiff = currentDate.getMonth() - targetDate.getMonth();

  // Adjust for year transition
  if (monthDiff < 0) {
      yearDiff -= 1;
      monthDiff += 12; // Add 12 months as we moved one year back
  }

  const formattedDate = `${months[targetDate.getMonth()]} ${targetDate.getDate()}, ${targetDate.getFullYear()}`;
  let diff: string;

  if (yearDiff === 0 && monthDiff === 0) {
    diff = " (this month)";
  } else if (yearDiff === 0 && monthDiff === 1) {
    diff = " (1mo ago)";
  } else if (yearDiff === 0) {
    diff = ` (${monthDiff}mo ago)`;
  } else {
    diff = ` (${yearDiff}y ${monthDiff}mo ago)`;
  }

  return formattedDate + " " + diff;
}

  export default formatDateWithAgo;