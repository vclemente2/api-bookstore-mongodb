import AuthorsService from "../services/AuthorsService.js";

class AuthorsController {
  static async findAll(_, res) {
    const authors = await AuthorsService.findAllAuthors();

    return res.json(authors);
  }

  static async findOne(req, res) {
    const { id } = req.params;

    const author = await AuthorsService.findAuthorById(id);

    return res.json(author);
  }

  static async create(req, res) {
    const createdAuthor = await AuthorsService.createAuthor(req.body);

    return res.status(201).json(createdAuthor);
  }

  static async update(req, res) {
    const { id } = req.params;

    const updatedAuthor = await AuthorsService.updateAuthor(req.body, id);

    return res.status(200).json(updatedAuthor);
  }

  static async destroy(req, res) {
    const { id } = req.params;

    await AuthorsService.deleteAuthor(id);

    return res.sendStatus(204);
  }
}

export default AuthorsController;
