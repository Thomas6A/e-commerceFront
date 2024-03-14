class Cart{
    id;
    user;
    products = [];

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }

    setProducts(products) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }
}

export default Cart;