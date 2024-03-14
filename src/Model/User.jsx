class User{
    id;
    username;
    password;
    roles;

    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    setUsername(username) {
        this.username = username;
    }

    getUsername() {
        return this.username;
    }

    setPassword(password) {
        this.password = password;
    }

    getPassword() {
        return this.password;
    }

    setRoles(roles) {
        this.roles = roles;
    }

    getRoles() {
        return this.roles;
    }
}

export default User;