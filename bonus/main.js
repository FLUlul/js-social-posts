/* 
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.
*/

var app = new Vue(
    {
        el: "#container",
        data: {
           posts: [
                {
                    "userName" : "Phil Mangione",
                    "userPicture" : "https://unsplash.it/300/300?image=15",
                    "postDate" : "05/11/21",
                    "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "postImage" : "https://unsplash.it/600/300?image=171",
                    "likes" : 80
                },
            
                {
                    "userName" : "Valy Mex",
                    "userPicture" : "https://unsplash.it/300/300?image=50",
                    "postDate" : "04/05/21",
                    "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "postImage" : "https://unsplash.it/600/300?image=77",
                    "likes" : 10
                },
            
                {
                    "userName" : "FluIdo",
                    "userPicture" : "https://unsplash.it/300/300?image=27",
                    "postDate" : "31/01/21",
                    "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "postImage" : "''",
                    "likes" : 27
                },
            
                {
                    "userName" : "Metallo",
                    "userPicture" : "https://unsplash.it/300/300?image=47",
                    "postDate" : "31/01/21",
                    "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
                    "postImage" : "https://unsplash.it/300/300?image=52",
                    "likes" : 97
                }
            ]
        }   
    }
)


