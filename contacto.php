<?php

if($_POST["Message"]){
    mail("manusandoval05@gmail.com", "Contacto", $_POST["Test"]. "From: an@email.adress"); 
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="title" content="GIC - Gestión Inteligente de Condominios">
    <meta name="description" content="Administración de Condominios">
    <meta name="keywords" content="Administración, Condominios, Condominio, Ciudad, México, CDMX">
    <meta name="robots" content="index, follow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:site_name" content="GIC - Gestión Inteligente de Condominios">
    <meta property="og:title" content="GIC - Gestión Inteligente de Condominios">
    <meta property="og:type" content="website">
    <meta property="og:description" content="Administración de Condominios con alta tecnología">
    <meta property="og:image" content="https://raw.githubusercontent.com/webpage-ui/gicondo/main/static/images/preview.png?v=bbf01bd1">
    <meta property="og:image:width" content="1880">
    <meta property="og:image:height" content="996">
    <meta property="og:url" content="https://gicondo.com">
    <title>Contacto GIC</title>
    <link rel="stylesheet" href="static/scss/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css">
    <link rel="shortcut icon" href="static/images/icons/GIC_logo.png" type="image/x-icon">
    <script src="static/js/menu.js"></script>
    <script src="static/js/contact.js"></script>
</head>
<body>
    <section class="glass-section">
        <div class="glass-menu">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="servicios.html">Servicios</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                <li><a href="contacto.html" class="active">Contacto</a></li>
            </ul>
        </div>
    </section>
    <header>
        <a href="" class="logo">Gicondo</a>
        <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="servicios.html">Servicios</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="contacto.html" class="active">Contacto</a></li>
        </ul>
        <button class="toggle" onclick="menuToggle();"><img src="static/images/icons/list.svg" alt="Open Menu" class="icon"></button>
    </header>  
    <section class="contact-section">
        <div class="form-container">
            <h2>Contáctanos</h2>
            <form action="contacto.php" id="form" method="POST">
                <div class="row100">
                    <div class="column">
                        <div class="input-box">
                            <input type="text" name="Name" id="name" required="required">
                            <span class="text">Nombre *</span>
                            <span class="line"></span>
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <input type="text" name="Surname" id="surname" required="required">
                            <span class="text">Apellido *</span>
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="column">
                        <div class="input-box">
                            <input type="email" name="Email" id="email" required="required">
                            <span class="text" id="email-text">Correo *</span>
                            <span class="line" id="email-line"></span>
                        </div>
                    </div>
                    <div class="column">
                        <div class="input-box">
                            <input type="tel" name="Phone" id="phone" required="required">
                            <span class="text" id="tel-text">Teléfono *</span>
                            <span class="line" id="tel-line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="column">
                        <div class="input-box text-area">
                            <textarea name="Message" id="message" required="required"></textarea>
                            <span class="text">Mensaje *</span> 
                            <span class="line"></span>
                        </div>
                    </div>
                </div>
                <div class="row100">
                    <div class="column">
                        <input class="submit" type="submit" value="Enviar">
                    </div>
                </div>
           </form>
        </div>
    </section>
</body>
</html>