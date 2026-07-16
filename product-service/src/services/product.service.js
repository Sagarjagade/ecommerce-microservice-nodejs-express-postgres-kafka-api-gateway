
import categoryRepository from "../repositories/category.repository";
import productRepository from "../repositories/product.repository";
import ConflictError from "../errors/ConflictError";
import NotFoundError from "../errors/NotFoundError";
// const producer = require("../kafka/producer");
import producer from "../kafka/producer.js";
import TOPICS from "../../packages/kafka/topics.js";

class ProductService {

    async create(data) {

        const category = await categoryRepository.findById(data.categoryId);

        if (!category) {
            throw new NotFoundError("Category not found");
        }

        const sku = await productRepository.findBySku(data.sku);

        if (sku) {
            throw new ConflictError("SKU already exists");
        }

        const product = await productRepository.create(data);

        /*
        Kafka
        */

        await producer.publish(
            TOPICS.PRODUCT_CREATED,
            {

                id: product.id,

                categoryId: product.categoryId,

                sku: product.sku,

                name: product.name

            }
        );

        return product;

    }

    async getAll() {
        return await productRepository.findAll();
    }

    async getById(id) {

        const product = await productRepository.findById(id);

        if (!product) {
            throw new NotFoundError("Product not found");
        }

        return product;

    }

    async update(id, data) {

        await this.getById(id);

        return await productRepository.update(id, data);

    }

    async delete(id) {

        await this.getById(id);

        return await productRepository.delete(id);

    }

}
export default new ProductService();
// module.exports = new ProductService();