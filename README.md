# Harpocrates
### Hecho por Kai Jauregi

## Tema
Una web en donde utilizando la API de [QR code api](https://goqr.me/api/) para crear QRs,
ademas de poder generar distintos tipos de cifrados

## Como verlo
Podeis ver la web en [este link](https://jauregiazcue.github.io/harpocrates/), pero
si quereis ver el codigo, teneis que :
    
- Clickar en el boton Code que hay en el repositiorio 
- Descargarlo en zip o clonarlo
- Abrirlo en visual studio
- Si teneis la extension Live Server podeis verlo
- Sino pulsad dos veces en el index.html, pero si haceis algun cambio en el codigo tendreis que darle al refresh

## Estructura de las clases
```
├── htmlMain
├── htmlObject
    ├── htmlArticle
    ├── htmlSection
        ├── htmlQrSection
        ├── htmlCipher
            ├── htmlAlphabetToNumberSection
            ├── htmlAtbashSection
            ├── htmlCaesarSection
                ├── htmlVigenereSection
    ├── htmlSearchBar
├── fetch
```
## Estructura de generacion de html
```
├── htmlMain
    ├── Header
    ├── Main
        ├── htmlSearchBar
        ├── htmlArticle
            ├── Title Section
                ├── Title
                ├── Buttons
                    ├── Favorite
                    ├── Dropdown
            ├── htmlQRSection
                ├── leftDiv
                    ├── Input
                ├── rightDiv
                    ├── Qr Image
                    ├── Download Button
        ├── htmlArticle
            ├── Title Section
                ├── Title
                ├── Buttons
                    ├── Favorite
                    ├── Dropdown
            ├── htmlCaesarSection
                ├── topDiv
                    ├── KeyInput
                ├── bottomDiv
                    ├── leftDiv
                        ├── LeftInput
                    ├── rightDiv
                        ├── RightInput (Output of the cipher)
        ├── htmlArticle
            ├── Title Section
                ├── Title
                ├── Buttons
                    ├── Favorite
                    ├── Dropdown
            ├── htmlAtbashSection
                ├── leftDiv
                    ├── LeftInput
                ├── rightDiv
                    ├── RightInput (Output of the cipher)
        ├── htmlArticle
            ├── Title Section
                ├── Title
                ├── Buttons
                    ├── Favorite
                    ├── Dropdown
            ├── htmlAlphabetToNumberSection
                ├── leftDiv
                    ├── LeftInput
                ├── rightDiv
                    ├── RightInput (Output of the cipher)
        ├── htmlArticle
            ├── Title Section
                ├── Title
                ├── Buttons
                    ├── Favorite
                    ├── Dropdown
            ├── htmlVigenereSection
                ├── leftDiv
                    ├── LeftInput
                ├── rightDiv
                    ├── RightInput (Output of the cipher)
    ├── Footer 
```




