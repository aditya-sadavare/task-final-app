import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Task from './models/Task.js';

dotenv.config();
await connectDB();

await Task.deleteMany();

await Task.insertMany([
  { title: 'Buy groceries', priority: 'medium', dueDate: new Date() },
  { title: 'Finish report', priority: 'high' },
  { title: 'Water plants', priority: 'low' },
  { title: 'Call Alice', priority: 'medium', dueDate: new Date() },
  { title: 'Gym session', priority: 'high' }
]);

console.log('Database seeded');
process.exit();
