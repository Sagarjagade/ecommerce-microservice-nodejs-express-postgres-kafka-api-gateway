
import { category } from "../models";

class CategoryRepository {

    async create(data) {
        return await Category.create(data);
    }

    async findAll() {
        return await Category.findAll({
            order: [["createdAt", "DESC"]],
        });
    }

    async findById(id) {
        return await Category.findByPk(id);
    }

    async findByName(name) {
        return await Category.findOne({
            where: { name },
        });
    }

    async update(id, data) {
        await Category.update(data, {
            where: { id },
        });

        return this.findById(id);
    }

    async delete(id) {
        return await Category.destroy({
            where: { id },
        });
    }
}

export default new CategoryRepository;
// module.exports = new CategoryRepository();