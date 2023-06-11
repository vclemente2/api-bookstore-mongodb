import BooksService from "../services/BooksService.js";

class BooksController {
  static async findAll(_, res) {
    try {
      const books = await BooksService.findAllBooks();

      return res.json(books);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async findOne(req, res) {
    const { id } = req.params;

    try {
      const book = await BooksService.findBookById(id);

      return res.json(book);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async create(req, res) {
    try {
      const createdBook = await BooksService.createBook(req.body);

      return res.status(201).json(createdBook);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    const { id } = req.params;
    try {
      const updated = await BooksService.updateBook(req.body, id);

      return res.status(201).json(updated);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async destroy(req, res) {
    const { id } = req.params;
    try {
      await BooksService.deleteBook(id);

      return res.sendStatus(204);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

export default BooksController;
