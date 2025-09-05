# 🎙️ Podcast Manager

Um app ao estilo **Netflix**, que centraliza diferentes episódios de **podcasts em vídeo**, organizados por categorias.

---

## 📌 Descrição
O **Podcast Manager** permite listar episódios de podcasts separados por sessões de categorias, além de possibilitar a busca por nome do podcast.  
A ideia é fornecer uma experiência simples para organizar e consumir conteúdos de podcasts.

---

## 🌍 Domínio
- Podcasts feitos em **vídeo** (ex.: YouTube)

---

## ✨ Features
- ✅ Listar os episódios em sessões de **categorias**  
  - Exemplos de categorias: `saúde`, `bodybuilder`, `mentalidade`, `humor`  
- ✅ Filtrar episódios pelo **nome do podcast**

---

## 🚀 Como funciona

### 🔹 Listar episódios por categoria
- **Rota:** `GET /list`  
- **Descrição:** Retorna a lista completa de episódios disponíveis

#### Exemplo de Response
```json
[
  {
    "podcastName": "Flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "categories": ["saúde", "esporte", "bodybuilder"]
  },
  {
    "podcastName": "Flow",
    "episode": "RAMON DINO + FILIPE FAIXA PRETA - Flow #391",
    "videoId": "5fUxbFybkuE",
    "cover": "https://i.ytimg.com/vi/5fUxbFybkuE/hqdefault.jpg",
    "link": "https://www.youtube.com/watch?v=5fUxbFybkuE",
    "categories": ["esporte", "corrida"]
  }
]
