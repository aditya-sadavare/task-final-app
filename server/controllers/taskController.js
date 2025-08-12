import Task from '../models/Task.js';


export const getTasks = async (req, res) => {
  try {
    const { q, priority, isDone, sort, order } = req.query;

    let filter = {};
    if (q) filter.title = { $regex: q, $options: 'i' };
    if (priority) filter.priority = priority;
    if (isDone) filter.isDone = isDone === 'true';

    let sortOption = {};
    if (sort) sortOption[sort] = order === 'asc' ? 1 : -1;

    const tasks = await Task.find(filter).sort(sortOption);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const addTask = async (req, res) => {
  try {
    const { title, priority, dueDate } = req.body;
    if (!title || title.length < 3 || title.length > 100) {
      return res.status(400).json({ error: 'Title must be 3–100 chars' });
    }

    const task = new Task({
      title,
      priority,
      dueDate
    });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const toggleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Not found' });

    task.isDone = !task.isDone;
    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
