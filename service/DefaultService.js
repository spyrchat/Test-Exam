'use strict';


/**
 * Delete an author
 *
 * _ Long 
 * no response value expected for this operation
 **/
exports.authorsAuthorIdDELETE = function(_) {
  return new Promise(function(resolve, __) {
    resolve();
  });
}


/**
 * Get details of a specific author
 *
 * _ Long 
 * returns Author
 **/
exports.authorsAuthorIdGET = function(_) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an author
 *
 * body AuthorInput 
 * _ Long 
 * returns Author
 **/
exports.authorsAuthorIdPUT = function(body,_) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all authors
 *
 * returns List
 **/
exports.authorsGET = function() {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new author
 *
 * body AuthorInput 
 * returns Author
 **/
exports.authorsPOST = function(body) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a book
 *
 * bookId Long 
 * no response value expected for this operation
 **/
exports.booksBookIdDELETE = function(bookId) {
  return new Promise(function(resolve, __) {
    resolve();
  });
}


/**
 * Get details of a specific book
 *
 * bookId Long 
 * returns Book
 **/
exports.booksBookIdGET = function(bookId) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a book
 *
 * body BookInput 
 * bookId Long 
 * returns Book
 **/
exports.booksBookIdPUT = function(body,bookId) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all books
 *
 * returns List
 **/
exports.booksGET = function() {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = [ {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
}, {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new book
 *
 * body BookInput 
 * returns Book
 **/
exports.booksPOST = function(body) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a category
 *
 * categoryId Long 
 * no response value expected for this operation
 **/
exports.categoriesCategoryIdDELETE = function(categoryId) {
  return new Promise(function(resolve, __) {
    resolve();
  });
}


/**
 * Get details of a specific category
 *
 * categoryId Long 
 * returns Category
 **/
exports.categoriesCategoryIdGET = function(categoryId) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a category
 *
 * body CategoryInput 
 * categoryId Long 
 * returns Category
 **/
exports.categoriesCategoryIdPUT = function(body,categoryId) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all categories
 *
 * returns List
 **/
exports.categoriesGET = function() {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new category
 *
 * body CategoryInput 
 * returns Category
 **/
exports.categoriesPOST = function(body) {
  return new Promise(function(resolve, __) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

