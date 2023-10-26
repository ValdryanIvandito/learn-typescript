import { useState, useEffect } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import NewReminder from "./components/NewReminder";
import Reminder from "./interfaces/Reminder";
import reminderService from "./api/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  const loadReminders = async () => {
    const getReminders = await reminderService.getReminders();
    setReminders(getReminders);
  };

  const removeReminder = (id: number) => {
    console.log(id);
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  };

  const addReminder = async (title: string) => {
    console.log(title);
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  };

  useEffect(() => {
    loadReminders();
  }, []);

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
