const express = require('express');
const app = express();
const PORT = 8080;
const COLOR = process.env.COLOR || 'blue';

app.get('/', (req, res) => {
  res.send(`<h1 style="color:${COLOR}">Hello from ${COLOR} environment!</h1>`);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
