import ApiError from "../errors/ApiError.js";
import AuthorsModel from "../models/AuthorsModel.js";

class AuthorsService {
  static async findAllAuthors() {
    const authors = await AuthorsModel.find();

    if (!authors) throw new ApiError("Internal error.", 500);

    return authors;
  }

  static async findAuthorById(id) {
    const author = await AuthorsModel.findOne({ _id: id });

    if (!author) throw new ApiError("Author not found.", 404);

    return author;
  }

  static async createAuthor(data) {
    const createdAuthor = await AuthorsModel.create(data);

    if (!createdAuthor) throw new ApiError("Internal error.", 500);

    return createdAuthor;
  }

  static async updateAuthor(data, id) {
    const updatedAuthor = await AuthorsModel.findByIdAndUpdate(
      { _id: id },
      data,
      {
        new: true
      }
    );

    if (!updatedAuthor) throw new ApiError("Author not found.", 404);

    return updatedAuthor;
  }

  static async deleteAuthor(id) {
    const deletedAuthor = await AuthorsModel.deleteOne({ _id: id });

    if (!deletedAuthor) throw new ApiError("Internal error.", 500);
    if (!deletedAuthor.deletedCount)
      throw new ApiError("Author not found.", 404);

    return deletedAuthor;
  }
}

export default AuthorsService;
