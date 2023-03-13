import { Router } from "express";

const router = Router();
router.get("/", (req, res) => res.render("index.ejs", {title: 'first website with NodeJS'})); 
//.render le envio el nombre del archivo que quiero que mi navegador reciba
//router significa que solo tenemos una parte de la aplicacion, esta parte de codigo se utilizara en la app principal
//{title: ' '} le estamos pasando un objeto al frontend del index.js desde el backend



router.get("/about", (req, res) => res.render("about.ejs", {title: 'About Page'}));

router.get("/contact", (req, res) => res.render("contact.ejs", {title: 'Contact Page'}));

export default router;
