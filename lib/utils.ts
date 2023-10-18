import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimestamp = (createdAt: Date): string => {
  // Get the current date
  const now = new Date();

  // Calculate the difference in milliseconds
  const diff = now.getTime() - createdAt.getTime();

  // Convert the difference to seconds, minutes, hours, days, weeks, months, and years
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  // Return the appropriate string based on the difference
  if (seconds < 60) {
    return `${seconds} seconds ago`;
  } else if (minutes < 60) {
    return `${minutes} minutes ago`;
  } else if (hours < 24) {
    return `${hours} hours ago`;
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (weeks < 4) {
    return `${weeks} weeks ago`;
  } else if (months < 12) {
    return `${months} months ago`;
  } else {
    return `${years} years ago`;
  }
};


export const formatNumber = (number: number): string => {
  // Check if the number is a valid number
  if (isNaN(number)) {
    return 'Invalid number';
  }

  // Convert the number to a string
  const numStr = number.toString();

  // Check the length of the string
  const len = numStr.length;

  // If the length is less than or equal to 3, return the number as it is
  if (len <= 3) {
    return numStr;
  }

  // If the length is between 4 and 6, append K for Thousands and divide by 1000
  if (len >= 4 && len <= 6) {
    return `${(number / 1000).toFixed(1)}K`;
  }

  // If the length is greater than 6, append M for Millions and divide by 1000000
  if (len > 6) {
    return `${(number / 1000000).toFixed(1)}M`;
  }
  return 'Invalid number'
};
