<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $destinataire = "g.cabecassegura@ynov.com";
    $sujet = "Nouveau message de " . $nom;
    $message_complet = "De : " . $nom . " <" . $email . ">\n\n" . $message;

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($destinataire, $sujet, $message_complet, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi de votre message.";
    }
} else {
    header("Location: formulaire.html");
    exit();
}
?>