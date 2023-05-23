<!-- 怎么一键生成 -->
# https 设置

## 生成证书

[https://freessl.cn/acme-deploy](https://freessl.cn/acme-deploy)

## 添加域名解析

将生成的证书记录添加到域名解析中

## 部署证书

通过 acme-deploy 生成的证书，将证书文件放到服务器上
![alt](imgs/2023-05-22_12-16-37.png)

## 配置 nginx

```nginx
server {
    listen 443 ssl;
    server_name example.com;
    ssl_certificate /path/to/fullchain.cer;
    ssl_certificate_key /path/to/example.com.key;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers HIGH:!aNULL:!MD5;
    location / {
        proxy_pass http://localhost:8080;
    }
}
```

## 其他

- vpn 代理
- vpn wrap + https
- chatgpt + https
- 一键登录
- node + docker 环境
