export const fetchNotifications = async () => {
  const response = await fetch("http://localhost:3000/notifications");
  if (!response.ok) {
    throw new Error("Failed to fetch notifications");
  }
  return response.json();
};
