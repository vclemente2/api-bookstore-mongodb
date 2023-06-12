import BooksService from "../services/BooksService.js";

class BooksController {
  static async findAll(req, res) {
    const { publisher } = req.query;

    const books = await BooksService.findAllBooks(publisher);

    return res.json(books);
  }

  static async findOne(req, res) {
    const { id } = req.params;

    const book = await BooksService.findBookById(id);

    return res.json(book);
  }

  static async create(req, res) {
    const createdBook = await BooksService.createBook(req.body);

    return res.status(201).json(createdBook);
  }

  static async update(req, res) {
    const { id } = req.params;

    const updatedBook = await BooksService.updateBook(req.body, id);

    return res.status(200).json(updatedBook);
  }

  static async destroy(req, res) {
    const { id } = req.params;

    await BooksService.deleteBook(id);

    return res.sendStatus(204);
  }
}

export default BooksController;
