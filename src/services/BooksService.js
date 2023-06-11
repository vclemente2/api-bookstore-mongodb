import ApiError from "../errors/ApiError.js";
import BooksModel from "../models/BooksModel.js";

class BooksService {
  static async findAllBooks() {
    const books = await BooksModel.find();

    if (!books) throw new ApiError("Internal error.", 500);

    return books;
  }

  static async findBookById(id) {
    const book = await BooksModel.findOne({ _id: id });

    if (!book) throw new ApiError("Book not found.", 404);

    return book;
  }

  static async createBook(data) {
    const createdBook = await BooksModel.create(data);

    if (!createdBook) throw new ApiError("Internal error.", 500);

    return createdBook;
  }

  static async updateBook(data, id) {
    const updatedBook = await BooksModel.findByIdAndUpdate({ _id: id }, data, {
      new: true
    });

    if (!updatedBook) throw new ApiError("Book not found.", 404);

    return updatedBook;
  }

  static async deleteBook(id) {
    const deletedBook = await BooksModel.deleteOne({ _id: id });

    if (!deletedBook) throw new ApiError("Internal error.", 500);
    if (!deletedBook.deletedCount) throw new ApiError("Book not found.", 404);

    return deletedBook;
  }
}

export default BooksService;
