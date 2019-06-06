<?php
session_start();

$product = [
    // Продукты
    ["id" => 1, "name" => "Пряная вишня", "manefacter" => "Масса нетто: 200 г." , "price" => 180],
    ["id" => 2, "name" => "Клубника и ваниль", "manefacter" => "Масса нетто: 200 г." , "price" => 180],
    ["id" => 3, "name" => "Киви и мята", "manefacter" => "Масса нетто: 200 г." , "price" => 180],
    ["id" => 4, "name" => "Банан и апельсин", "manefacter" => "Масса нетто: 200 г." , "price" => 180],
    ["id" => 5, "name" => "Яблочный штрудель", "manefacter" => "Масса нетто: 200 г." , "price" => 180],
    ["id" => 6, "name" => "Слива в шоколаде", "manefacter" => "Масса нетто: 200 г." , "price" => 180],
    // Не продукты
    ["id" => 7, "name" => "3 джема + 2 чая", "manefacter" => "Два джема по 200 г. + двая чая по 50 г." , "price" => 480],
    ["id" => 8, "name" => "Джем в подарок", "manefacter" => "Джем в отдельной упаковке." , "price" => 200],
    ["id" => 9, "name" => "3 джема", "manefacter" => "3 джема по 200 г." , "price" => 360],
    ["id" => 10, "name" => "Набор открыток", "manefacter" => "3 открытки 6×3 см." , "price" => 100],
    ["id" => 11, "name" => "Льняной фартук", "manefacter" => "Фартук с надписью." , "price" => 1600],
    ["id" => 12, "name" => "Кружка с рисунком", "manefacter" => "Не лентяйка, а королева дивана." , "price" => 250],
    ["id" => 13, "name" => "3 джема + чай", "manefacter" => "Набор" , "price" => 500],

    ];

$action = $_POST["action"];
if ($action == 'show'){
   if (!(isset($_SESSION['cart']))){
       echo 'Корзина пуста';
       exit;
   };
   $cart = $_SESSION['cart'];
   if (count($cart) == 0){
       echo 'Корзина пуста';
       exit;
   }

    // Выводим циклом данные из $_SESSION['cart']
}

############################
if ($action == 'sum'){
    $cart = $_SESSION['cart'];
    if (!(isset($_SESSION['cart'])) || count($cart) == 0){
        echo '0';
        exit;
    };
    echo count($cart);
}

############################
if ($action == 'add'){
    $cart = $_SESSION['cart'];
	$id = $_POST['id'];
	$newProduct["idProduct"] = $id;
	$cart[count($cart)] = $newProduct;
	$_SESSION['cart'] = $cart;
    echo count($cart);
}

###########################
if ($action == 'del'){
    $id = $_POST["id"];
    $newCart = array();
    $cart = $_SESSION['cart'];
    for ($i = 0; $i < count($cart); $i++){
        $idProduct = $cart[$i]["idProduct"];
        if ($id != $idProduct){
            $newCart[count($newCart)] = $cart[$i];
        }
    }
    $_SESSION['cart'] = $newCart;
    echo count($cart);
}

//$_SESSION['cart'] = null;

?>