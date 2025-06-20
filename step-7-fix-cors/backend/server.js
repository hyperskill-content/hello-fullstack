const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  
  const beatlesData = [
    {
      name: "John Lennon",
      description: "Rhythm guitarist, vocalist, and primary songwriter. Co-founded The Beatles and was known for his activism and peace advocacy."
    },
    {
      name: "Paul McCartney",
      description: "Bass guitarist, vocalist, and primary songwriter. Often called the most commercially successful musician in popular music history."
    },
    {
      name: "George Harrison",
      description: "Lead guitarist, occasional vocalist, and songwriter. Known as 'The Quiet Beatle' and introduced Indian music to the band."
    },
    {
      name: "Ringo Starr",
      description: "Drummer and occasional vocalist. Joined the band in 1962, replacing Pete Best, and was known for his distinctive drumming style."
    }
  ];
  
  res.end(JSON.stringify(beatlesData));
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
}); 