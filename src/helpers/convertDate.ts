
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
    
    const yearDiff = currentDate.getFullYear() - targetDate.getFullYear();
    const monthDiff = currentDate.getMonth() - targetDate.getMonth();
    
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
   const formattedDate = `${months[targetDate.getMonth()]} ${targetDate.getDate()}, ${targetDate.getFullYear()}`;
    let diff: string;
    
    if (yearDiff === 0 && monthDiff === 0) {
      diff = " (this month)";
    } else if (yearDiff === 0 && monthDiff === 1) {
      diff = " (1mo ago)";
    } else {
      diff = ` (${yearDiff}y ${monthDiff}mo ago)`;
    }
    
    return formattedDate;
  }

  export default formatDateWithAgo;