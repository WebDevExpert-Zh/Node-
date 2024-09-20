const mysql = require('mysql2/promise');

const mysqlConnection=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'test_sql',
    multipleStatements: true,
    connectTimeout: 10000, // 连接超时时间，单位为毫秒
});
const connectDB = async () => {
  try {
    const connection = await mysqlConnection.getConnection();
    console.log('MySQL Connected');
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
};
connectDB()
module.exports=mysqlConnection;