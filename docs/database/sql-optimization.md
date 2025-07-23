# SQL 查询优化

SQL查询优化是数据库性能调优的核心。

## 查询分析

使用EXPLAIN分析查询执行计划：

```sql
EXPLAIN SELECT * FROM users WHERE age > 25;
```

## 常见优化技巧

### 1. 避免SELECT *
```sql
-- 不好的做法
SELECT * FROM users;

-- 好的做法
SELECT id, name, email FROM users;
```

### 2. 使用合适的JOIN
```sql
-- 内连接
SELECT u.name, p.title 
FROM users u 
INNER JOIN posts p ON u.id = p.user_id;
```

### 3. 合理使用WHERE子句
- 在WHERE子句中使用索引列
- 避免在WHERE子句中使用函数

## 性能监控

定期监控数据库性能指标：
- 查询响应时间
- 索引使用率
- 锁等待时间
