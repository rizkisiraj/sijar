function formatDateWithAgo(date: Date) {
    const months = [
      'January', 'February', 'March', 'April',
      'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ];
  
    const currentDate = new Date();
    const targetDate = new Date(date);
    
    const yearDiff = currentDate.getFullYear() - targetDate.getFullYear();
    const monthDiff = currentDate.getMonth() - targetDate.getMonth();
    
    let formattedDate: string = `${months[targetDate.getMonth()]} ${targetDate.getDate()}, ${targetDate.getFullYear()}`;
    
    if (yearDiff === 0 && monthDiff === 0) {
      formattedDate += " (this month)";
    } else if (yearDiff === 0 && monthDiff === 1) {
      formattedDate += " (1mo ago)";
    } else {
      formattedDate += ` (${yearDiff}y ${monthDiff}mo ago)`;
    }
    
    return formattedDate;
  }

  export default formatDateWithAgo;