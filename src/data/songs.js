const songs = [
  {
    "id": "58f0dd5da4f93aef908b6225",
    "author": "Author1",
    "name": "Fleming Montgomery",
    "genre": "Genre4",
    "year": 1986
  },
  {
    "id": "58f0dd5d1e5d72285ce0258e",
    "author": "Author10",
    "name": "Jeanette Stokes",
    "genre": "Genre2",
    "year": 1982
  },
  {
    "id": "58f0dd5d86da5571d8208586",
    "author": "Author2",
    "name": "Mcconnell Kane",
    "genre": "Genre3",
    "year": 1985
  },
  {
    "id": "58f0dd5de08f3a794740fc12",
    "author": "Author2",
    "name": "Logan Greer",
    "genre": "Genre2",
    "year": 1989
  },
  {
    "id": "58f0dd5dda837884fe554846",
    "author": "Author4",
    "name": "Leah Colon",
    "genre": "Genre2",
    "year": 1988
  },
  {
    "id": "58f0dd5d7f8ac1769bbeb746",
    "author": "Author6",
    "name": "Hannah Dunlap",
    "genre": "Genre2",
    "year": 1980
  },
  {
    "id": "58f0dd5d174aa74e64745267",
    "author": "Author4",
    "name": "Herring Sawyer",
    "genre": "Genre2",
    "year": 1987
  },
  {
    "id": "58f0dd5d0a409a575294f42b",
    "author": "Author3",
    "name": "Maribel Byers",
    "genre": "Genre2",
    "year": 1984
  },
  {
    "id": "58f0dd5defa8d5a9eac1d6fe",
    "author": "Author6",
    "name": "Saundra Wolf",
    "genre": "Genre4",
    "year": 1989
  },
  {
    "id": "58f0dd5d897ae101693ef9fc",
    "author": "Author9",
    "name": "Jenny Mcfadden",
    "genre": "Genre2",
    "year": 1985
  },
  {
    "id": "58f0dd5d2fd172d4c6ba4e75",
    "author": "Author8",
    "name": "Bonnie Spencer",
    "genre": "Genre3",
    "year": 1988
  },
  {
    "id": "58f0dd5de43e27d76a41e53a",
    "author": "Author8",
    "name": "Witt Koch",
    "genre": "Genre1",
    "year": 1980
  },
  {
    "id": "58f0dd5dab29e0bc9c8510a5",
    "author": "Author10",
    "name": "Gretchen Chavez",
    "genre": "Genre3",
    "year": 1984
  },
  {
    "id": "58f0dd5dc3d763d51b78d097",
    "author": "Author8",
    "name": "Holden Charles",
    "genre": "Genre4",
    "year": 1983
  },
  {
    "id": "58f0dd5d3a1ca1420f16191e",
    "author": "Author2",
    "name": "Angelique Cochran",
    "genre": "Genre2",
    "year": 1980
  },
  {
    "id": "58f0dd5d4664f3a46c103f20",
    "author": "Author6",
    "name": "Madeline Hensley",
    "genre": "Genre4",
    "year": 1987
  },
  {
    "id": "58f0dd5dc33acfe24da637cb",
    "author": "Author1",
    "name": "Julia Cabrera",
    "genre": "Genre1",
    "year": 1986
  },
  {
    "id": "58f0dd5dae21199ac7f37838",
    "author": "Author1",
    "name": "Sherry Lawrence",
    "genre": "Genre1",
    "year": 1986
  },
  {
    "id": "58f0dd5d6ce94e4ee9859b65",
    "author": "Author2",
    "name": "Carole Rosario",
    "genre": "Genre1",
    "year": 1980
  },
  {
    "id": "58f0dd5da3f249284ccfdbc9",
    "author": "Author7",
    "name": "Moreno Smith",
    "genre": "Genre2",
    "year": 1983
  },
  {
    "id": "58f0dd5dd07f4b9d8eb6dad8",
    "author": "Author6",
    "name": "Brandy Dillon",
    "genre": "Genre3",
    "year": 1980
  },
  {
    "id": "58f0dd5de0f3a0d277f831d9",
    "author": "Author3",
    "name": "Fitzpatrick Padilla",
    "genre": "Genre4",
    "year": 1989
  },
  {
    "id": "58f0dd5d3a5f631f0a772612",
    "author": "Author3",
    "name": "Kristy Wolfe",
    "genre": "Genre1",
    "year": 1982
  },
  {
    "id": "58f0dd5dab7fece5155713b7",
    "author": "Author8",
    "name": "Shanna Simon",
    "genre": "Genre2",
    "year": 1988
  },
  {
    "id": "58f0dd5da714b2a0f48896d7",
    "author": "Author4",
    "name": "Cassandra Macias",
    "genre": "Genre2",
    "year": 1985
  },
  {
    "id": "58f0dd5d9fdba14a6dfd7293",
    "author": "Author9",
    "name": "Holland Johnson",
    "genre": "Genre3",
    "year": 1983
  },
  {
    "id": "58f0dd5d7a5aa86a98af18dc",
    "author": "Author3",
    "name": "Nolan Finley",
    "genre": "Genre3",
    "year": 1982
  },
  {
    "id": "58f0dd5d5679b4c9673b1416",
    "author": "Author2",
    "name": "Nora Meadows",
    "genre": "Genre3",
    "year": 1983
  },
  {
    "id": "58f0dd5db82cf38dd2d9d2e1",
    "author": "Author7",
    "name": "Virgie Gomez",
    "genre": "Genre1",
    "year": 1983
  },
  {
    "id": "58f0dd5ddbf84fd7b9270993",
    "author": "Author4",
    "name": "Felicia Melton",
    "genre": "Genre3",
    "year": 1989
  },
  {
    "id": "58f0dd5d6cf4882f8f62e454",
    "author": "Author9",
    "name": "Abby Hunt",
    "genre": "Genre1",
    "year": 1985
  },
  {
    "id": "58f0dd5dd943123432ca8ed7",
    "author": "Author3",
    "name": "Obrien Day",
    "genre": "Genre1",
    "year": 1986
  },
  {
    "id": "58f0dd5d8ab198423e968916",
    "author": "Author4",
    "name": "Hester Casey",
    "genre": "Genre1",
    "year": 1981
  },
  {
    "id": "58f0dd5db003ec98706c8986",
    "author": "Author4",
    "name": "Letha Duran",
    "genre": "Genre2",
    "year": 1986
  },
  {
    "id": "58f0dd5d03f4e60441f46e14",
    "author": "Author3",
    "name": "Sylvia Craft",
    "genre": "Genre1",
    "year": 1985
  },
  {
    "id": "58f0dd5d4ab6b2d8024deafb",
    "author": "Author10",
    "name": "Powell Battle",
    "genre": "Genre1",
    "year": 1981
  },
  {
    "id": "58f0dd5d125b09adb57e43bc",
    "author": "Author9",
    "name": "Louisa Arnold",
    "genre": "Genre4",
    "year": 1981
  },
  {
    "id": "58f0dd5dcc91b5317d941178",
    "author": "Author3",
    "name": "Colette Petersen",
    "genre": "Genre3",
    "year": 1989
  },
  {
    "id": "58f0dd5dc1b35c5d9e429d45",
    "author": "Author4",
    "name": "Alba Gonzalez",
    "genre": "Genre3",
    "year": 1988
  },
  {
    "id": "58f0dd5d96d094988dec7767",
    "author": "Author4",
    "name": "Wynn Guzman",
    "genre": "Genre3",
    "year": 1984
  },
  {
    "id": "58f0dd5dddfb72883c6f7e25",
    "author": "Author10",
    "name": "Cobb Simpson",
    "genre": "Genre3",
    "year": 1989
  },
  {
    "id": "58f0dd5dbad0bc706d62356d",
    "author": "Author5",
    "name": "Carroll Stafford",
    "genre": "Genre3",
    "year": 1980
  },
  {
    "id": "58f0dd5dcbde38a2b5702b73",
    "author": "Author2",
    "name": "Owens Reilly",
    "genre": "Genre2",
    "year": 1981
  },
  {
    "id": "58f0dd5dae09719d755827b7",
    "author": "Author8",
    "name": "Aurelia Obrien",
    "genre": "Genre1",
    "year": 1986
  },
  {
    "id": "58f0dd5d25b900886f9acbb3",
    "author": "Author6",
    "name": "Marilyn Rivers",
    "genre": "Genre4",
    "year": 1989
  },
  {
    "id": "58f0dd5d0755bd5c4a2d6a0a",
    "author": "Author9",
    "name": "Candy West",
    "genre": "Genre4",
    "year": 1986
  },
  {
    "id": "58f0dd5dfb7992cff081fc3e",
    "author": "Author3",
    "name": "Violet Little",
    "genre": "Genre1",
    "year": 1981
  },
  {
    "id": "58f0dd5d3008bdeae88f0be7",
    "author": "Author9",
    "name": "Phelps Lara",
    "genre": "Genre4",
    "year": 1989
  },
  {
    "id": "58f0dd5d4f17eaeb6aa6dcb2",
    "author": "Author5",
    "name": "Hilary Copeland",
    "genre": "Genre1",
    "year": 1989
  }
];

export default songs;