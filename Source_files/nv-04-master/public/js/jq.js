window.BASE_URL = "/api/process";
window.UPLOAD_URL = "/api/upload";
postData = post;

function back() {
    window.history.go(-1);
    return false;
}

function route(url) {
    let href = window.location.href.split('#')[0];
    return href + "#" + url;
}

//count cart items
function countCart() {
    let cart = getCart();
    return cart.length;
}

//manage cart with local storage
function getCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }

    cart = cart.filter(function (curr) {
        return curr !== null;
    });
    //remove items with quantity 0 and null
    cart = cart.filter(function (curr) {
        return curr.quantity > 0;
    });
    return cart;
}

//get product by id
function getProduct(id) {
    let products = JSON.parse(localStorage.getItem('products'));
    return products.find(function (curr) {
        return curr.id === id;
    });
}

//add product to cart
function addToCart(product_id) {
    //confirm
    if (!confirm('Are you sure you want to add this item to cart?')) {
        return false;
    }
    console.log(product_id);
    let cart = getCart();
    let product = getProduct(product_id);
    console.log(product);
    let item = cart.find(function (curr) {
        return curr.id === product_id;
    });
    if (item === undefined) {
        product.quantity = 1;
        cart.push(product);
    } else {
        cart.find(function (curr) {
            if (curr.id === product_id) {
                curr.quantity++;
                return true
            }
        });
    }
    alert('Item added to cart');
    localStorage.setItem('cart', JSON.stringify(cart));
    return cart;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

//remove product from cart
function removeFromCart(product_id) {
    //confirm
    if (!confirm('Are you sure you want to remove this item from cart?')) {
        return false;
    }
    let cart = getCart();
    let product = getProduct(product_id);
    let item = cart.find(function (curr) {
        return curr.id === product.id;
    });
    if (item !== undefined) {
        cart.splice(cart.indexOf(item), 1);
    }
    alert('Item removed from cart');
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
    return cart;
}

//clear cart
function clearCart() {
    localStorage.removeItem('cart');
    alert('Cart cleared');
    return [];
}

$(document).on('click', '.close', function () {
    //close closest modal
    $(this).closest('.modal').modal('hide');
});
window.addEventListener('showComments', function (e) {
    //get comments from post in local storage
    let post = findPost(e.detail.id);
    let comments = post.comments;
    let html='';
    if (comments.length > 0) {
        comments.forEach(function (curr) {
            html += `
<!-- Single comment-->
                        <div class="d-flex">
                            <div class="flex-shrink-0"><img class="rounded-circle"
                                                            src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
                                                            alt="..."></div>
                            <div class="ms-3">
                                <div class="fw-bold">${curr.user.names}</div>
                               ${curr.content}
                            </div>
                        </div>
        `;
        });
    } else {
        html = `

                    <h2 class="card-title
                    ">No comments yet</h2>

        `;
    }
    //show modal and set content
    $('#commentsModal').modal('show');
    $('#commentsModal .body-content').html(html);
});

$(document).on('click', '#btnSubmit', async function (e) {
    e.preventDefault();
    let data = getFormData($('form[name=LOGIN_FORM]'));
    data.resource = "login";
    data.Username = Base64.encode(makeid(6) + data.Username)
    data.Password = Base64.encode(makeid(6) + data.Password)
    console.log(data);
    let callback = function (dataRes) {
        console.log(dataRes);
        if (dataRes.error) {
            alert(dataRes.error);
            return;
        }
        window.localStorage.bearer = dataRes.token;
        window.localStorage.expires = dataRes.expires;
        window.localStorage.iat = dataRes.iat;
        window.dispatchEvent(new CustomEvent("auth", {}));
        window.location.reload();
    }
    await post(data, callback, function (err) {
        console.log(err);
    });
});
$(document).on('click', '.logout', function (e) {
    e.preventDefault();
    window.localStorage.bearer = null;
    window.localStorage.expires = null;
    window.localStorage.iat = null;
    window.dispatchEvent(new CustomEvent("auth", {}));
});


function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
        let element = $(document).find('input[name=' + n['name'] + ']');
        //if element is image
        if (element.attr('type') === 'file') {
            indexed_array[n['name']] = element.data('upload_path');
        } else if (element.attr('type') === 'checkbox') {
            indexed_array[n['name']] = element.is(':checked');
        } else {
            indexed_array[n['name']] = n['value'];
        }
    });

    return indexed_array;
}

function findPost(id) {
    let posts = JSON.parse(localStorage.getItem('posts'));
    return posts.find(function (curr) {
        return curr.id === id;
    });
}

async function post(data, callback, errorCallback) {
    if (callback === undefined) {
        callback = function (data) {
            return console.log(data);
        }
    }
    if (errorCallback === undefined) {
        errorCallback = function (data) {
            return console.log(data);
        }
    }
    await $.ajax({
        url: BASE_URL, headers: {
            "Content-type": "application/json",
            "Bearer": window.localStorage.bearer,
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        }, type: "POST", dataType: 'json', data: JSON.stringify(data), success: function (response) {
            try {
                if (response.error && response.error === "Access denied. Invalid or expired token!") {
                    window.location.href = "/login";
                    localStorage.removeItem('mercadoraccount');
                    return;
                }


                $(document).trigger('complete');
                return callback(response);
            } catch (e) {
                console.log(e);
            }
        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            try {
                return errorCallback(errorThrown);
            } catch (e) {
                console.log(e);
            }
        }, complete: function (jqXHR, textStatus) {
            //check if last part of resource is create or update
            if (data.resource.includes('_') && data.resource.split('_')[1] === 'create' || data.resource.split('_')[1] === 'delete') {
                console.log('create or update');
                window.location.reload();
            }
        }
    });
}

async function postData(data, callback, errorCallback) {
    if (callback === undefined) {
        callback = function (data) {
            return console.log(data);
        }
    }
    if (errorCallback === undefined) {
        errorCallback = function (data) {
            return console.log(data);
        }
    }
    await $.ajax({
        url: BASE_URL, headers: {
            "Content-type": "application/json",
            "Bearer": window.localStorage.bearer,
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
        }, type: "POST", dataType: 'json', data: JSON.stringify(data), success: function (response) {
            try {
                if (response.error && response.error === "Access denied. Invalid or expired token!") {
                    window.location.href = "/login";
                    localStorage.removeItem('mercadoraccount');
                    return;
                }


                $(document).trigger('complete');
                return callback(response);
            } catch (e) {
                console.log(e);
            }
        }, error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            try {
                return errorCallback(errorThrown);
            } catch (e) {
                console.log(e);
            }
        }, complete: function (jqXHR, textStatus) {
            //check if last part of resource is create or update
            if (data.resource.includes('_') && data.resource.split('_')[1] === 'create' || data.resource.split('_')[1] === 'delete') {
                window.location.reload();
            }
        }
    });
}

/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        let output = "";
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },

    // public method for decoding
    decode: function (input) {
        let output = "";
        let chr1, chr2, chr3;
        let enc1, enc2, enc3, enc4;
        let i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 !== 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 !== 64) {
                output = output + String.fromCharCode(chr3);
            }
        }

        output = Base64._utf8_decode(output);

        return output;
    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        let utftext = "";

        for (let n = 0; n < string.length; n++) {

            const c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        let string = "";
        let i = 0;
        let c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            } else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    }
}

function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
