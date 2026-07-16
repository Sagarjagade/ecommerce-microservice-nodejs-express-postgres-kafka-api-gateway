
import categoryRepository from "../repositories/category.repository";
import ConflictError from "../errors/ConflictError";
import NotFoundError from "../errors/NotFoundError";
class CategoryService {

    async create(data) {

        const category = await categoryRepository.findByName(data.name);

        if (category) {
            throw new ConflictError("Category already exists");
        }

        return await categoryRepository.create(data);
    }

    async getAll() {
        return await categoryRepository.findAll();
    }

    async getById(id) {

        const category = await categoryRepository.findById(id);

        if (!category) {
            throw new NotFoundError("Category not found");
        }

        return category;
    }

    async update(id, data) {

        await this.getById(id);

        return await categoryRepository.update(id, data);
    }

    async delete(id) {

        await this.getById(id);

        return await categoryRepository.delete(id);
    }

}
export default new CategoryService();
// module.exports = new CategoryService();