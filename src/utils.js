const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const formatDate = (date) => {
    const formatedDate = new Date(date)
    return months[formatedDate.getMonth()].slice(0, 3) + ". " + formatedDate.getFullYear()
}