const http = require('http');
const test = require('ava');
const got = require('got');
const app = require('../index.js');
const { json } = require('stream/consumers');

test.before(async (t) => {
	t.context.server = http.createServer(app);
    const server = t.context.server.listen();
    const { port } = server.address();
	t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
});

test.after.always((t) => {
	t.context.server.close();
});

test("GET /books", async (t) => {
	const { body, statusCode } = await t.context.got.get(`books`);
	t.truthy(body, "Body Exists!");
	t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("POST /books", async (t) => {
    const { body, statusCode } = await t.context.got.post("books", {
        json: { title: "Name", author_id: 0, category_id: 0, published_year: 0 },
    });
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("GET /books/{bookId}", async (t) => {
    const bookId = 0;
    const { body, statusCode } = await t.context.got.get(`books/${bookId}`);
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("PUT /books/{bookId}", async (t) => {
    const bookId = 0;
    const { body, statusCode } = await t.context.got.put(`books/${bookId}`, {
        json: {title: "Name", author_id: 0, category_id: 0, published_year: 0},
    });
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("DELETE /books/{bookId}", async (t) => {
    const bookId = 0;
    const {body, statusCode } = await t.context.got.delete(`books/${bookId}`);
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("GET /authors", async (t) => {
    const {body, statusCode } = await t.context.got.get(`authors`); 
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("POST /authors", async (t) => {
    const {body, statusCode } = await t.context.got.post(`authors`,{json:{"name":"NAME"}}); 
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("GET /authors/{authorId}", async(t) => {
    const authorId = 0;
    const {body, statusCode} = await t.context.got.get(`authors/${authorId}`);
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("PUT /authors/{authorId}", async (t) => {
    const authorId = 0;
    const { body, statusCode } = await t.context.got.put(`authors/${authorId}`, {
        json: {name: "Name"},
    });
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("DELETE /author/{authorId}", async (t) => {
    const authorId = 0;
    const {body, statusCode } = await t.context.got.delete(`authors/${authorId}`);
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("GET /categories", async (t) => {
    const {body, statusCode } = await t.context.got.get(`categories`); 
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("POST /categories", async (t) => {
    const { body, statusCode } = await t.context.got.post("categories", {
        json: { name: "Name"},
    });
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("GET /categories/{categoryId}", async(t) => {
    const categoryId = 0;
    const {body, statusCode} = await t.context.got.get(`categories/${categoryId}`);
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("PUT /categories/{categoryId}", async (t) => {
    const categoryId = 0;
    const { body, statusCode } = await t.context.got.put(`categories/${categoryId}`, {
        json: {title: "Name"},
    });
    t.truthy(body, "Body Exists!");
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});

test("DELETE /categories/{categoryId}", async (t) => {
    const categoryId = 0;
    const {body, statusCode } = await t.context.got.delete(`categories/${categoryId}`);
    t.truthy(statusCode, "Status code Exists!");
    t.is(statusCode, 200, "Status code is 200!");
});
