# Podcast Menager

### DESCRIÇÃO
Um app ao estilo netflix, aonde possa centralizar diferentes episódios podcasts separados por categoria

### DOMÍNIO
Podcasts feitos em vídeo

### FEATURES
- Listar os episódios podcasts em sessões de categorias
    -[saúde, bodybuilder, mentalidade, humor]
- Filtrar episódios por nome de podcast

### COMO

#### FEATURE:
    Listar os episódios podcasts em sessões de categorias

### COMO VOU IMPLEMENTAR
    GET: retorna lsita de episódios


    response:
    ```js
    [
        {
            podcastName: "Flow",
            episode: "CBUM - Flow #319",
            videoId: "pQSuQmUfS30",
            cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg",
            link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
            categories: ["saúde", "esporte","bodybuilder"]            
        },
        {
            podcastName: "Flow",
            episode: "RAMON DINO + FILIPE FAIXA PRETA - Flow #391",
            videoId: "5fUxbFybkuE",
            cover: "https://i.ytimg.com/vi/5fUxbFybkuE/hqdefault.jpg",
            link: "https://www.youtube.com/watch?v=5fUxbFybkuE",
            categories: ["esporte", "corrida"]            
        },
    ]
    ``` 

GET: retorna lsita de episódios baseado em um parametro enviado pelo cliente do nome do podcast 


