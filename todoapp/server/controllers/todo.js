const Todo = require('../models/todo');

exports.getAllTodos = async (req, res) => {
    try {
        const allTodos = await Todo.find();
        return res.status(200).send(allTodos);
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to fetch all todos' });
    }
};

exports.createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create({
            title: req.body.title,
            description: req.body.description || '' 
        });
        return res.status(201).send({ newTodo });
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to create new todo' });
    }
};

exports.updateTodo = async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description
            },
            { new: true }
        );
        return res.status(200).send(updatedTodo);
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to update todo' });
    }
};

exports.deleteTodo = async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        return res.status(200).send(deletedTodo);
    } catch (error) {
        console.log('Error:', error.message);
        return res.status(400).send({ message: 'Failed to delete todo' });
    }
};
