import BooksModel from "../models/BooksModel";

class BooksService {
  static async findAllBooks() {
    try {
      const books = await BooksModel.find();

      if (!books) throw new Error("Internal error.");

      return books;
    } catch (error) {
      return error;
    }
  }

  static async findBookById(id) {
    try {
      const book = await BooksModel.findOne(id);

      if (!book) throw new Error("Book not Found.");

      return book;
    } catch (error) {
      return error;
    }
  }

  static async createBook(data) {
    try {
      const createdBook = await BooksModel.create(data);

      if (!createdBook) throw new Error("Internal Error.");

      return createdBook;
    } catch (error) {
      return error;
    }
  }

  static async updateBook(data, id) {
    try {
      const updatedBook = await BooksModel.updateOne({ id }, data);

      if (!updatedBook) throw new Error("Internal Error.");

      return updatedBook;
    } catch (error) {
      return error;
    }
  }

  static async deleteBook(id) {
    try {
      const deletedBook = await BooksModel.deleteOne({ id });

      if (!deletedBook) throw new Error("Internal Error.");

      return deletedBook;
    } catch (error) {
      return error;
    }
  }
}

export default BooksService;
