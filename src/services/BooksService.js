import BooksModel from "../models/BooksModel.js";

class BooksService {
  static async findAllBooks() {
    try {
      const books = await BooksModel.find();

      if (!books) throw new Error("Internal error.");

      return books;
    } catch (error) {
      throw new Error("Internal error.");
    }
  }

  static async findBookById(id) {
    try {
      const book = await BooksModel.findOne({ _id: id });

      if (!book) throw new Error("Book not Found.");

      return book;
    } catch (error) {
      if (error.message === "Book not Found.")
        throw new Error("Book not Found.");

      throw new Error("Internal Error");
    }
  }

  static async createBook(data) {
    try {
      const createdBook = await BooksModel.create(data);

      if (!createdBook) throw new Error("Internal Error.");

      return createdBook;
    } catch (error) {
      throw new Error("Internal error.");
    }
  }

  static async updateBook(data, id) {
    try {
      const updatedBook = await BooksModel.findByIdAndUpdate(
        { _id: id },
        data,
        { new: true }
      );

      if (!updatedBook) throw new Error("Not Found.");

      return updatedBook;
    } catch (error) {
      throw new Error("Not Found.");
    }
  }

  static async deleteBook(id) {
    try {
      const deletedBook = await BooksModel.deleteOne({ _id: id });
      console.log(deletedBook);

      if (!deletedBook) throw new Error("Internal error.");
      if (!deletedBook.deletedCount) throw new Error("Book not found.");

      return deletedBook;
    } catch (error) {
      if (error.message === "Book not found.")
        throw new Error("Book not found.");

      throw new Error("Internal error.");
    }
  }
}

export default BooksService;
