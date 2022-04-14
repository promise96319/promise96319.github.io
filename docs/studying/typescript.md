# TypeScript

## Utility Types
### Partial
将属性变为可选。
``` typescript
type Partial<T> = { [P in keyof T]?: T[P] };
```

### Required
将属性变为必选。`-` 号表示去除 `?` 或者 `readonly` 这类关键字。默认为 `+` 号。
```typescript
type Required<T> = { 
  [P in keyof T]-?: T[P] 
}
```

### Readonly
```typescript
type Readonly<T> = { 
  readonly [P in keyof T]: T[P] 
};
```

### Record
对象形式
```typescript
type Record<K extends keyof any, T> = { 
  [P in K]: T 
};
```

### Exclude
排除
```typescript
type Exclude<T, U> = T extends U ? never : T;
```

### Pick
选取部分属性
```typescript
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

### Omit
排除部分属性
```typescript
type Omit<T, K extends keyof T> = Pick<T, Exclude<T, K>>
```

### Pick
```typescript
```

### Pick
```typescript
```

### Pick
```typescript
```




## Module

- 只有使用了 `import/export` 语法的才会视为 `module`
- 模块解析方式：`Classic` 和 `Node`，`tsconfig.json` 里的 `moduleResolution, baseUrl, paths, rootDirs` 会影响解析结果。
