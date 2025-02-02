'use strict';

// Importing utilities for writing JSON responses
var utils = require('../utils/writer.js');

// Importing the Default service that contains business logic
var Default = require('../service/DefaultService');

//
// AUTHOR-RELATED ENDPOINTS
//

/**
 * Handles DELETE request to delete an author by ID.
 * Calls `Default.authorsAuthorIdDELETE` and returns the response.
 */
module.exports.authorsAuthorIdDELETE = function authorsAuthorIdDELETE (_, res, __, authorId) {
  Default.authorsAuthorIdDELETE(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles GET request to fetch an author's details by ID.
 */
module.exports.authorsAuthorIdGET = function authorsAuthorIdGET (_, res, __, authorId) {
  Default.authorsAuthorIdGET(authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles PUT request to update an author's details by ID.
 * Expects a request body containing the new author details.
 */
module.exports.authorsAuthorIdPUT = function authorsAuthorIdPUT (_, res, __, body, authorId) {
  Default.authorsAuthorIdPUT(body, authorId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles GET request to retrieve a list of all authors.
 */
module.exports.authorsGET = function authorsGET (_, res, __) {
  Default.authorsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles POST request to create a new author.
 * Expects a request body containing author details.
 */
module.exports.authorsPOST = function authorsPOST (_, res, __, body) {
  Default.authorsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//
// BOOK-RELATED ENDPOINTS
//

/**
 * Handles DELETE request to remove a book by ID.
 */
module.exports.booksBookIdDELETE = function booksBookIdDELETE (_, res, __, bookId) {
  Default.booksBookIdDELETE(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles GET request to fetch a book's details by ID.
 */
module.exports.booksBookIdGET = function booksBookIdGET (_, res, __, bookId) {
  Default.booksBookIdGET(bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles PUT request to update a book's details by ID.
 * Expects a request body containing new book details.
 */
module.exports.booksBookIdPUT = function booksBookIdPUT (_, res, __, body, bookId) {
  Default.booksBookIdPUT(body, bookId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles GET request to retrieve a list of all books.
 */
module.exports.booksGET = function booksGET (_, res, __) {
  Default.booksGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles POST request to create a new book.
 * Expects a request body containing book details.
 */
module.exports.booksPOST = function booksPOST (_, res, __, body) {
  Default.booksPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

//
// CATEGORY-RELATED ENDPOINTS
//

/**
 * Handles DELETE request to remove a category by ID.
 */
module.exports.categoriesCategoryIdDELETE = function categoriesCategoryIdDELETE (_, res, __, categoryId) {
  Default.categoriesCategoryIdDELETE(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles GET request to fetch a category's details by ID.
 */
module.exports.categoriesCategoryIdGET = function categoriesCategoryIdGET (_, res, __, categoryId) {
  Default.categoriesCategoryIdGET(categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles PUT request to update a category's details by ID.
 * Expects a request body containing the new category details.
 */
module.exports.categoriesCategoryIdPUT = function categoriesCategoryIdPUT (_, res, __, body, categoryId) {
  Default.categoriesCategoryIdPUT(body, categoryId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles GET request to retrieve a list of all categories.
 */
module.exports.categoriesGET = function categoriesGET (_, res, __) {
  Default.categoriesGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

/**
 * Handles POST request to create a new category.
 * Expects a request body containing category details.
 */
module.exports.categoriesPOST = function categoriesPOST (_, res, __, body) {
  Default.categoriesPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
