class Product {
    id;
    product_name;
    product_price;
    product_description;
    product_image;

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setName(product_name) {
        this.product_name = product_name;
    }

    getName() {
        return this.product_name;
    }

    setPrice(product_price) {
        this.product_price = product_price;
    }

    getPrice() {
        return this.product_price;
    }

    setDescription(product_description) {
        this.product_description = product_description;
    }

    getDescription() {
        return this.product_description;
    }

    setImage(product_image) {
        this.product_image = product_image;
    }

    getImage() {
        return this.product_image;
    }

}

export default Product;