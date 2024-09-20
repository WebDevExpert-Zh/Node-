const express = require('express');
const router = express.Router();
const mysqlConnection = require('../db/index')

/* GET home page. */
router.get('', async (req, res, next) => {
  try {
    const [data] = await mysqlConnection.execute('select * from user')
    res.send({
      code: 200,
      status: 200,
      data
    })
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// 带参数
router.get('/photo', async (req, res, next) => {
  console.log(req.query.id);
  
  try {
    const [data] = await mysqlConnection.execute('select * from photo where user_id=?', [req.query.id])
    console.log(data);
    
    res.send({
      code: 200,
      status: 200,
      data
    })
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
})
router.get('/photo/:id', async (req, res, next) => {
  console.log(req.params.id);
  
  try {
    const [data] = await mysqlConnection.execute('select * from photo where user_id=?', [req.params.id])
    console.log(data);
    
    res.send({
      code: 200,
      status: 200,
      data
    })
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
})

// 编辑
router.post('/user/changeName', async (req, res, next) => {
  const { name, id } = req.body;
  try {
    await mysqlConnection.execute('UPDATE user SET name=? WHERE id=?', [name, id]);
    const [data] = await mysqlConnection.execute('SELECT * FROM user WHERE id=?', [id]);
    res.send({
      msg: 'ok',
      data
    });
  } catch (error) {
    res.status(500).json({ error: 'Error updating user' });
  }
});

// 插入
router.post('/user/add', async (req, res, next) => {
  const { name, age, address } = req.body;
  try {
     await mysqlConnection.execute('INSERT INTO user (name,age,address) VALUES (?,?,?)',[name,age,address])
    const data = await mysqlConnection.execute('SELECT * FROM user WHERE name=? and age=? and address=?', [name,age,address]);
    res.send({
      msg: 'ok',
      data
    });
  } catch (error) {
   res.status(500).json({ error: 'Error updating user' });
  }
})

module.exports = router;
