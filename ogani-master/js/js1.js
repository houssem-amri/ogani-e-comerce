// signup begin

function signup(X) {
	var firstName = document.getElementById('firstName').value;
	var verifFirstName = firstName.length < 3;
	displayError(verifFirstName, 'firstNameError', 'first name should have at least 8 characters');
	var lastName = document.getElementById('LastName').value;
	var verifLastName = lastName.length < 5;
	displayError(verifLastName, 'lastNameError', 'Last name should have at least 5 characters');
	var Email = document.getElementById('Email').value;
	var verifEmail = validateEmail(Email);
	displayError(!verifEmail, 'emailError', 'Invalid Email');
	var PhoneNumber = document.getElementById('phone').value;
	var verifPhone = validateNumber(PhoneNumber);
	displayError(!verifPhone, 'phoneError', 'phone number should have at least 8 Number');

	var Address = document.getElementById('Address').value;

	var verifAdress = Address.length < 8;
	displayError(verifAdress, 'adressError', 'Adress should have at least 8 characters');

	var Password = document.getElementById('Password').value;
	var verifPwd = Password.length < 8;
	displayError(verifPwd, 'pwd', 'password should have at Most 8 characters');

	if (!verifFirstName && !verifLastName && verifEmail && verifPhone && !verifAdress && !verifPwd) {
		var userId = JSON.parse(localStorage.getItem('userId') || '1');
		var user = {
			id: Number(userId),
			firstname: firstName,
			lastName: lastName,
			email: Email,
			PhoneNumber: PhoneNumber,
			adress: Address,
			pass: Password,
			role: X
		};
		var T = JSON.parse(localStorage.getItem('users') || '[]');
		T.push(user);
		localStorage.setItem('users', JSON.stringify(T));
		localStorage.setItem('userId', Number(userId) + 1);
	}
}

// fonction generique de message error
function displayError(condition, idError, msg) {
	if (condition) {
		document.getElementById(idError).innerHTML = msg;
		document.getElementById(idError).style.color = 'red';
	} else {
		document.getElementById(idError).innerHTML = '';
	}
}

function getObjectsFromLS(key) {
	return JSON.parse(localStorage.getItem(key) || '[]');
}

// existence email
function verifExistenceEmail() {
	var verifExEmail = document.getElementById('Email').value;
	var users = JSON.parse(localStorage.getItem('users') || '[]');

	for (let i = 0; i < users.length; i++) {
		verifExEmail == users[i].email;
		alert(nono);
	}
}

// email validate

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
// nmber validate

function validateNumber(str) {
	if (typeof str != 'string') return false;
	return !isNaN(str) && !isNaN(parseFloat(str));
}

// fonction checknumber

function checkNumber(value) {
	return value % 1 == 0;
}

// fonction validate select

function validateSelect() {
	var e = document.getElementById('productCategory');
	var strUser = e.options[e.selectedIndex].value;
	var strUser1 = e.options[e.selectedIndex].text;
	if (strUser == 0) {
		return true + strUser1;
	}
}

// Add product begin

function addProduct() {
	var name = document.getElementById('productName').value;
	var verifNameProduct = name.length < 3;
	displayError(verifNameProduct, 'productNameError', 'name product should have at least 3 characters');

	var price = document.getElementById('productPrice').value;
	var verifPrice = Number(price) <= 0;
	displayError(verifPrice, 'productPriceError', 'hah');

	var stock = document.getElementById('productStock').value;
	var verifStock = Number(stock) < 10;
	displayError(verifStock, 'productStockError', 'stock product should have at least 10 characters');

	var category = document.getElementById('productCategory').value;
	var verifCategory = validateSelect(category);
	displayError(verifCategory, 'productCategoryError', 'select category');

	if (verifCategory) {
		document.getElementById('productCategoryError').innerHTML = 'select category';
		document.getElementById('productCategoryError').style.color = 'red';
	} else {
		document.getElementById('productCategoryError').innerHTML = '';
	}
	if (!verifNameProduct && !verifPrice && !verifStock && !verifCategory) {
		var productId = JSON.parse(localStorage.getItem('productId') || 1);
		var product = {
			id: Number(productId),
			productName: name,
			productPrice: price,
			productStock: stock,
			productCategory: category
		};

		var T = JSON.parse(localStorage.getItem('products') || '[]');
		T.push(product);
		localStorage.setItem('products', JSON.stringify(T));
		localStorage.setItem('productId', Number(productId) + 1);
	}
}

// // home work
// //  function displayUsers() {
// //      var users=JSON.parse(localStorage.getItem('users')||'[]')
// //      var x=9;
// //      var userTable=``;

// //  }

function displayUsers() {
	var users = JSON.parse(localStorage.getItem('users') || '[]');
	var userTable = `
	<table class="table">
	<thead>
		<tr>
			<th scope="col">Id</th>
			<th scope="col">First name</th>
			<th scope="col">Last name </th>
			<th scope="col">Email</th>
			<th scope="col">Phone number</th>
			<th scope="col">Address</th>
			<th scope="col">Password</th>
		</tr>
	</thead>
  <tbody>`;
	for (let i = 0; i < users.length; i++) {
		userTable =
			userTable +
			`
    <tr>
      <th scope="row">${users[i].id}</th>
      <td>${users[i].firstname}</td>
      <td>${users[i].lastName}</td>
      <td>${users[i].email}</td>
	  <td>${users[i].PhoneNumber}</td>
	  <td>${users[i].adress}</td>
	  <td>${users[i].pass}</td>
	  <td><button class="icon_close btn btn-danger" onclick="deleteObject(${i}, 'users')"></button></td>
    </tr>`;
	}
	userTable =
		userTable +
		`</tbody>
  </table>`;

	document.getElementById('users').innerHTML = userTable;
}

function displayProducts() {
	var products = JSON.parse(localStorage.getItem('products') || '[]');

	var productTable = `
	<table class="table">
	<thead>
		<tr>
			<th scope="col">Id</th>
			<th scope="col">Product Name</th>
			<th scope="col">Product Price</th>
			<th scope="col">Product Stock</th>
			<th scope="col">Product Category</th>
		</tr>
	</thead>
  <tbody>`;
	for (let i = 0; i < products.length; i++) {
		productTable =
			productTable +
			`
    <tr>
      <th scope="row">${products[i].id}</th>
      <td>${products[i].productName}</td>
      <td>${products[i].productPrice}</td>
      <td>${products[i].productStock}</td>
	  <td>${products[i].productCategory}</td>
	  <td><button class="icon_close btn btn-danger" onclick="deleteObject(${i}, 'products')"></button></td>
	  
    </tr>`;
	}
	productTable =
		productTable +
		`</tbody>
  </table>`;

	document.getElementById('products').innerHTML = productTable;
}
function displayAddproducts() {
	var products = JSON.parse(localStorage.getItem('products') || '[]');
	var productAdd = ``;

	for (let i = 0; i < products.length; i++) {
		productAdd =
			productAdd +
			`
		<div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-1.jpg">
                            <ul class="featured__item__pic__hover">
                                <li><a onclick='addWishList(${products[i].id})'><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">${products[i].productName}</a></h6>
                            <h5>$${products[i].productPrice}</h5>
							<button type="submit" class="site-btn" onclick="reserve('reservation.html',${products[i]
								.id}, 'prToReserve')">reserve</button>
                        </div>
						
                    </div>
                </div>`;
	}

	document.getElementById('productAdd').innerHTML = productAdd;
}

// function validateLogin() {
// 	var loginEmail = document.getElementById('loginEmail').value;
// 	var loginPassword = document.getElementById('loginPassword').value;
// 	var users = JSON.parse(localStorage.getItem('users') || '[]');
// 	for (let i = 0; i < users.length; i++) {
// 		var userEmail = `${users[i].email}`;
// 		var userPassword = `${users[i].pass}`;
// 	}

// 	if (loginEmail == userEmail && loginPassword == userPassword) {
// 		document.getElementById('loginError').innerHTML = 'you are log';
// 		document.getElementById('loginError').style.color = 'green';
// 		document.getElementById('loginEmail').style.borderBottomColor = 'green';
// 		document.getElementById('loginPassword').style.borderBottomColor = 'green';
// 	} else {
// 		document.getElementById('loginError').innerHTML =
// 			'adresse email et le mot de passe que vous avez entrés ne correspondent pas à ceux présents dans nos fichiers. Veuillez vérifier et réessayer.';
// 		document.getElementById('loginError').style.color = 'red';
// 		document.getElementById('loginEmail').style.borderBottomColor = 'red';
// 		document.getElementById('loginPassword').style.borderBottomColor = 'red';
// 	}
// }

function Enable(checkbox, loginBtn) {
	document.getElementById(loginBtn).disabled = !checkbox.checked;
}

function reserve(page, id, key) {
	localStorage.setItem(key, id);
	location.replace(page);
}

function searchById(key, id) {
	var objects = getObjectsFromLS(key);
	var findedObject;
	for (let i = 0; i < objects.length; i++) {
		if (objects[i].id == id) {
			findedObject = objects[i];
		}
	}
	return findedObject;
}
function validateLogin() {
	var email = document.getElementById('loginEmail').value;
	var pwd = document.getElementById('loginPassword').value;
	var user = searchUserByEmailAndPwd(email, pwd);
	if (user) {
		localStorage.setItem('connectedUserId', user.id);
		if (user.role == 'admin') {
			location.replace('admin2.html');
		} else {
			location.replace('shop.html');
		}
	}
}

function searchUserByEmailAndPwd(email, pwd) {
	var users = JSON.parse(localStorage.getItem('users') || []);
	var findedUser;
	for (let i = 0; i < users.length; i++) {
		if (users[i].email == email && users[i].pass == pwd) {
			findedUser = users[i];
		}
	}
	return findedUser;
}

function displayProductInfo() {
	var idPr = localStorage.getItem('prToReserve');
	var product = searchById('products', idPr);
	document.getElementById('nameProducts').innerHTML = product.productName;
	document.getElementById('priceProducts').innerHTML = product.productPrice;
	document.getElementById('stockProducts').innerHTML = product.productStock;
}

function deleteObject(pos, key) {
	var objects = JSON.parse(localStorage.getItem(key) || '[]');
	objects.splice(pos, 1);
	localStorage.setItem(key, JSON.stringify(objects));
	location.reload();
}

function addToCard() {
	var qty = document.getElementById('productQuantity').value;
	var idPr = localStorage.getItem('prToReserve');
	var product = searchById('products', idPr);
	if (Number(product.productStock) >= Number(qty)) {
		var connectedUserId = localStorage.getItem('connectedUserId');
		var orderId = JSON.parse(localStorage.getItem('orderId') || '1');
		var order = {
			id: Number(orderId),
			qty: Number(qty),
			userId: Number(connectedUserId),
			productId: Number(idPr)
		};
		var orders = getObjectsFromLS('orders');
		orders.push(order);
		localStorage.setItem('orders', JSON.stringify(orders));
		localStorage.setItem('orderId', Number(orderId) + 1);

		// mise a jour du produit reserve
		var products = getObjectsFromLS('products');
		for (let i = 0; i < products.length; i++) {
			if (products[i].id == Number(idPr)) {
				products[i].productStock = Number(products[i].productStock) - Number(qty);
				break;
			}
		}
		localStorage.setItem('products', JSON.stringify(products));
		location.replace('basket.html');
	} else {
		alert('stock indisponible');
	}
}
function displayOrdres() {
	var orders = JSON.parse(localStorage.getItem('orders' || '[]'));
	var connectedUser = localStorage.getItem('connectedUserId');
	var myOrders = [];
	S = 0;
	for (let i = 0; i < orders.length; i++) {
		if (orders[i].userId == connectedUser) {
			myOrders.push(orders[i]);
		}
	}
	var productAddCart = `<table>
	<thead>
		<tr>
			<th class="shoping__product">Id</th>
			<th>Nom Produit</th>
			<th>Quantity</th>
			<th>Prix</th>
			<th>Prix Total</th>
			<th>supp</th>
		</tr>
	</thead>
	<tbody>`;

	var STotal = 0;
	for (let i = 0; i < myOrders.length; i++) {
		var product = searchById('products', myOrders[i].productId);
		S = Number(myOrders[i].qty) * Number(product.productPrice);
		STotal += S;
		productAddCart =
			productAddCart +
			`<tr>
			<td class="shoping__cart__item">

				<h5>${myOrders[i].id}</h5>
			</td>
			<td class="shoping__cart__price">
			${product.productName}
			</td>
			<td class="shoping__cart__quantity">
				<div class="quantity">
					<div class="pro-qty">
						<input type="text" value="${myOrders[i].qty}">
					</div>
				</div>
			</td>
			<td class="shoping__cart__total">
			${product.productPrice}
			</td>
			<td class="shoping__cart__total">
			${S}
			</td>
			<td class="shoping__cart__item__close">
				<button class="icon_close btn btn-danger" onclick="deleteObject(${i}, 'orders')"></button>
			</td>
		</tr>`;
	}

	productAddCart =
		productAddCart +
		`  </tbody>
	</table>
	<div class="row">
	<div class="col-lg-6">
                    <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__checkout">
                        <h5>Cart Total</h5>
                        <ul>
                            <li>Sub total <span>$${STotal}</span></li>
                            <li>Delivery fee <span>$${fraisDeLivraison(STotal)}</span></li>
                            <li>Total <span>$${STotal + fraisDeLivraison(STotal)}</span></li>
                        </ul>
                        <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                    </div>
                </div>
				</div>`;

	document.getElementById('productAddCart').innerHTML = productAddCart;
}

function addWishList(idPr) {
	var wishUserId = localStorage.getItem('connectedUserId');
	var wishId = JSON.parse(localStorage.getItem('wishId') || '1');
	var wishList = {
		id: Number(wishId),
		productId: Number(idPr),
		userId: Number(wishUserId)
	};
	var wishs = getObjectsFromLS('wishs');
	wishs.push(wishList);
	localStorage.setItem('wishs', JSON.stringify(wishs));
	localStorage.setItem('wishId', Number(wishId) + 1);
}
function displayWish() {
	var wishs = JSON.parse(localStorage.getItem('wishs' || '[]'));
	var connectedUser = localStorage.getItem('connectedUserId');
	var myWishs = [];
	var wishAddCart = '';
	for (let i = 0; i < wishs.length; i++) {
		if (wishs[i].userId == connectedUser) {
			myWishs.push(wishs[i]);
		}
	}
	wishAddCart =
		wishAddCart +
		`<table>
		<thead>
			<tr>
				<th class="shoping__product">Products</th>
				<th>ID Wish</th>
				<th>ID Product</th>
				<th>Name</th>
				<th>Price</th>
				<th>Delete</th>
				
			</tr>
		</thead>`;
	for (let i = 0; i < myWishs.length; i++) {
		var product = searchById('products', myWishs[i].productId);
		wishAddCart =
			wishAddCart +
			`<tbody>
		<tr>
			<td class="shoping__cart__item"><img src="img/cart/cart-1.jpg" alt=""></td>
			<td class="shoping__cart__item"><h5>${myWishs[i].id}</h5></td>
			<td class="shoping__cart__item"><h5>${product.id}</h5></td>
			<td class="shoping__cart__item"><h5>${product.productName}</h5></td>
			<td class="shoping__cart__item"><h5>${product.productPrice}</h5></td>
			<td><button class="icon_close btn btn-danger" onclick="deleteObject(${i}, 'orders')"></button></td>
			</tr>`;
	}
	wishAddCart =
		wishAddCart +
		`</tbody>
	</table>`;
	document.getElementById('wishAddCart').innerHTML = wishAddCart;
}

function fraisDeLivraison(tot) {
	// if (tot > 100) {
	// 	return 7;
	// } else {
	// 	return 10;
	// }

	return tot > 100 ? 7 : 10;
}
function SommeCommandeAndWishes(key, id) {
	var orders = JSON.parse(localStorage.getItem(key) || '[]');
	var connectedUser = localStorage.getItem('connectedUserId');

	var S = 0;
	for (let i = 0; i < orders.length; i++) {
		if (orders[i].userId == connectedUser) {
			S += 1;
		}
	}

	document.getElementById(id).innerHTML = S;
}

function search() {
	var priceProduct = getObjectsFromLS('products');
	var minPrice = document.getElementById('minPrice').value;
	var maxPrice = document.getElementById('maxPrice').value;
	var findedSearch = ``;
	for (let i = 0; i < priceProduct.length; i++) {
		if (
			Number(priceProduct[i].productPrice) >= Number(minPrice) &&
			Number(priceProduct[i].productPrice) <= Number(maxPrice)
		) {
			findedSearch =
				findedSearch +
				`<div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
			<div class="featured__item">
				<div class="featured__item__pic set-bg" >
					<ul class="featured__item__pic__hover">
						<li><a href="#"><i class="fa fa-heart"></i></a></li>
						<li><a href="#"><i class="fa fa-retweet"></i></a></li>
						<li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
					</ul>
				</div>
				<img src="img/featured/feature-1.jpg">
				<div class="featured__item__text">
					<h6><a href="#">${priceProduct[i].productName}</a></h6>
					<h5>$${priceProduct[i].productPrice}</h5>
					<button type="submit" class="site-btn" onclick="reserve('reservation.html',${priceProduct[i]
						.id}, 'prToReserve')">reserve</button>
				</div>
				
			</div>
		</div>`;
		}
	}
	document.getElementById('findedSearch').innerHTML = findedSearch;
}

function setHeader() {
	var connectedUser = localStorage.getItem('connectedUserId');
	var header = ``;

	if (connectedUser) {
		var user = searchById('users', connectedUser);
		if (user.role == 'users') {
			header = `<nav class="header__menu">
				<ul>
					<li class="active"><a href="./index.html">Home</a></li>
					<li><a href="./shop-grid.html">Shop</a></li>
					<li><a href="./blog.html">basket</a></li>
					<li><a href="#">${user.firstname}</a>
						<ul class="header__menu__dropdown">
							<li><a href="compte.html">votre compte Ogani</a></li>
							<li><a href="basket.html">vos commandes</a></li>
							<li><a href="basket.html">votre liste d'envies</a></li>
						</ul>
					</li>
					<li><a href="#" onclick="logOut()">logOut</a></li>
				</ul>
			</nav>`;
		} else {
			header = `<nav class="header__menu">
			<ul>
				<li class="active"><a href="./index.html">Home</a></li>
				<li><a href="./shop-grid.html">Admin</a></li>
				<li><a href="./blog.html">Add product</a></li>
				<li><a href="#">${user.firstname}</a>
					<ul class="header__menu__dropdown">
						<li><a href="./shop-details.html">Shop Details</a></li>
						<li><a href="./shoping-cart.html">Shoping Cart</a></li>
						<li><a href="./checkout.html">Check Out</a></li>
						<li><a href="./blog-details.html">Blog Details</a></li>
					</ul>
				</li>
				<li><a onclick="logOut()" href="#">logout</a></li>
			</ul>
		</nav>`;
		}
	} else {
		header = `<nav class="header__menu">
		 <ul>
			 <li class="active"><a href="./index.html">Home</a></li>
			 <li><a href="./shop-grid.html">Shop</a></li>
			 <li><a href="#">Pages</a>
				 <ul class="header__menu__dropdown">
					 <li><a href="./shop-details.html">Shop Details</a></li>
					 <li><a href="./shoping-cart.html">Shoping Cart</a></li>
					 <li><a href="./checkout.html">Check Out</a></li>
					 <li><a href="./blog-details.html">Blog Details</a></li>
				 </ul>
			 </li>
			 <li><a href="./blog.html">Blog</a></li>
			 <li><a href="./contact.html">Contact</a></li>
		 </ul>
	 </nav>`;
	}
	document.getElementById('header').innerHTML = header;
}

function logOut() {
	localStorage.removeItem('connectedUserId');
	location.reload();
}

function block(id) {
	var x = document.getElementById(id);
	if (x.style.display === 'none') {
		x.style.display = 'block';
	} else {
		x.style.display = 'none';
	}
}

function displayUserInfo() {
	var connectedUserId = localStorage.getItem('connectedUserId');
	var users = searchById('users', connectedUserId);
	document.getElementById('userFirstName').innerHTML = users.firstname;
	document.getElementById('userLastName').innerHTML = users.lastName;
	document.getElementById('userEmail').innerHTML = users.email;
	document.getElementById('userAdress').innerHTML = users.adress;
	document.getElementById('userPhone').innerHTML = users.PhoneNumber;
}
function EditAdress() {
	var connectedUser = localStorage.getItem('connectedUserId');

	var newAdress = document.getElementById('newAdress').value;
	var adressPass = document.getElementById('adressPass').value;
	var users = getObjectsFromLS('users');

	if (Number(users.id) == Number(connectedUser) && users.pass == adressPass) {
		users.adress == newAdress;
	}

	localStorage.setItem('users', JSON.stringify(users));
	location.reload();
}

function editAddress() {
	var pwd = document.getElementById('savedPwd').value;
	var newAddress = document.getElementById('newAddress').value;
	var connectedUser = localStorage.getItem('connectedUserId');
	var users = getObjectsFromLS('users');
	var errorPwd = false;
	for (let i = 0; i < users.length; i++) {
		if (users[i].id == Number(connectedUser)) {
			if (users[i].pass == pwd) {
				users[i].adress = newAddress;
				break;
			} else {
				errorPwd = true;
			}
		}
	}
	if (errorPwd) {
		document.getElementById('pwdErrorProfile').innerHTML = 'Please enter correct PWD';
	} else {
		localStorage.setItem('users', JSON.stringify(users));
		location.reload();
	}
}

function editPassword() {
	var pwdSavePwd = document.getElementById('pwdSavePwd').value;
	var newPwd = document.getElementById('newPwd').value;
	var repeatNewPwd = document.getElementById('repeatNewPwd').value;
	var connectedUser = localStorage.getItem('connectedUserId');
	var users = getObjectsFromLS('users');
	var errorPwd = false;
	var errorPwdRepeat = false;
	for (let i = 0; i < users.length; i++) {
		if (users[i].id == Number(connectedUser)) {
			if (users[i].pass == pwdSavePwd) {
				if (repeatNewPwd == newPwd) {
					users[i].pass = newPwd;
					break;
				} else {
					errorPwdRepeat = true;
				}
			} else {
				errorPwd = true;
			}
		}
	}
	if (errorPwd) {
		document.getElementById('pwdErrorProfilePwd').innerHTML = 'Please enter correct PWD';
		document.getElementById('pwdErrorProfilePwd').style.color = 'red';
	} else {
		document.getElementById('pwdErrorProfilePwd').innerHTML = '';

		if (errorPwdRepeat) {
			document.getElementById('repeatErrorProfilePwd').innerHTML = 'Please enter correct reapeat PWD';
			document.getElementById('repeatErrorProfilePwd').style.color = 'red';
		} else {
			localStorage.setItem('users', JSON.stringify(users));
			location.reload();
		}
	}
}
function modifier() {
	var numeroImmatriculation = document.getElementById('nouveauNumeroImmatriculation').value;
	var type = document.getElementById('nouveauType').value;
	var ville = document.getElementById('nouveauVille').value;
	var transporteurConnect = localStorage.getItem('transporteurConnect');
	var transporteurs = getObjetsFromLocalStorage('transporteurs');
	for (let i = 0; i < transporteurs.length; i++) {
		if (Number(transporteurs[i].id) == Number(transporteurConnect)) {
			transporteurs[i].numeroImmatriculation = numeroImmatriculation;
			transporteurs[i].type = type;
			transporteurs[i].ville = ville;
		}
	}
	localStorage.setItem('transporteurs', JSON.stringify(transporteurs));
	location.reload();
}
