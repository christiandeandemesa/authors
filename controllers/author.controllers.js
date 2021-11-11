const { Author } = require('../models/author.models');

module.exports = {

    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(newAuthor => res.json(newAuthor))
            .catch(err => res.status(400).json(err));
    },

    findAllAuthors: (req, res) => {
        Author.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json(err));
    },

    findOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json(err));
    },

    updateAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.json(err));
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.json(err));
    }

}