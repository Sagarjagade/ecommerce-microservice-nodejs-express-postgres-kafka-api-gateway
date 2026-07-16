
import { Product, Category } from "../models";
class ProductRepository {

    async create(data) {
        return await Product.create(data);
    }

    async findAll() {
        return await Product.findAll({
            include: [
                {
                    model: Category,
                    as: "category",
                },
            ],
            order: [["createdAt", "DESC"]],
        });
    }

    async findById(id) {
        return await Product.findByPk(id, {
            include: [
                {
                    model: Category,
                    as: "category",
                },
            ],
        });
    }

    async findBySku(sku) {
        return await Product.findOne({
            where: { sku },
        });
    }

    async update(id, data) {
        await Product.update(data, {
            where: { id },
        });

        return this.findById(id);
    }

    async delete(id) {
        return await Product.destroy({
            where: { id },
        });
    }
}
export default new ProductRepository();
// module.exports = new ProductRepository();